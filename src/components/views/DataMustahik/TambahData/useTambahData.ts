import { tambahData } from "@/actions/tambah-data";
import { generateAlamatString } from "@/lib/utils";
import { tambahDataSchema } from "@/schemas/tambah-edit-data";
import { Mustahik } from "@/types/Data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import * as XLSX from "xlsx";
import { db } from "@/lib/db";
import { tambahDataExcel } from "@/actions/tambah-data-excel";
import { IsOwned } from "@prisma/client";

type routeParams = {
  nama: string;
  nama_jalan: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
};

interface NewMustahik extends Omit<Mustahik, "tanggal"> {
  tanggal: number; // The new type for 'value'
}

export const useTambahData = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [isPendingUpload, setIsPendingUpload] = useState(false);

  const searchParams = useSearchParams();
  const namaParams = searchParams.get("nama");
  const nama_jalanParams = searchParams.get("nama_jalan");
  const kelurahanParams = searchParams.get("kelurahan");
  const kecamatanParams = searchParams.get("kecamatan");
  const kotaParams = searchParams.get("kota");
  const golonganParams = searchParams.get("golongan");

  const memilikiTanahParams = searchParams.get(
    "memiliki_tanah_sawah_warung_bengkel"
  );
  const memilikiPerhiasanParams = searchParams.get("memiliki_perhiasan");
  const memilikiKulkasParams = searchParams.get("memiliki_kulkas_tv_lcd");
  const memilikiTabungParams = searchParams.get("memiliki_tabung_gas_3kg");
  const memilikiHpParams = searchParams.get("memiliki_hp_laptop");
  const memilikiKendaraanParams = searchParams.get(
    "memiliki_kendaraan_bermotor"
  );
  const memilikiTabunganParams = searchParams.get("memiliki_tabungan");

  const [activeTab, setActiveTab] = useState<"form_tambah" | "upload_excel">(
    "form_tambah"
  );

  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (files: File[]) => {
    const file = files[0];
    if (!file) {
      return null;
    }

    setFiles(files);
    const reader = new FileReader();

    reader.onloadstart = () => {
      setIsPendingUpload(true);
    };

    reader.onload = async (e) => {
      const binaryString = e.target?.result as string;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: NewMustahik[] = XLSX.utils.sheet_to_json(worksheet);

      console.log(jsonData);

      const formattedData = jsonData.map((mustahik) => {
        return {
          ...mustahik,
          NIK: mustahik.NIK.toString(),
          tanggal: new Date(1900, 0, (mustahik.tanggal as number) - 1),
        };
      });
      const res = await tambahDataExcel(formattedData);
      if (res.success && !res.error) {
        toast.success(res.success);
        setIsPendingUpload(false);
        router.replace("/dashboard");
        return;
      }
      toast.error(res.error);
    };

    reader.readAsArrayBuffer(file);
  };

  const form = useForm({
    defaultValues: {
      nama: namaParams ?? "",
      nama_jalan: nama_jalanParams ?? "",
      kelurahan: kelurahanParams ?? "",
      kecamatan: kecamatanParams ?? "",
      kota: kotaParams ?? "",
      tanggal: new Date(),
      jumlah_bantuan: 0,
      golongan: golonganParams ?? "",
      memiliki_tanah_sawah_warung_bengkel: memilikiTanahParams ?? "",
      memiliki_perhiasan: memilikiPerhiasanParams ?? "",
      memiliki_kulkas_tv_lcd: memilikiKulkasParams ?? "",
      memiliki_tabung_gas_3kg: memilikiTabungParams ?? "",
      memiliki_hp_laptop: memilikiHpParams ?? "",
      memiliki_kendaraan_bermotor: memilikiKendaraanParams ?? "",
      memiliki_tabungan: memilikiTabunganParams ?? "",
    },
    resolver: zodResolver(tambahDataSchema),
  });

  const handleTambahData = async (data: z.infer<typeof tambahDataSchema>) => {
    try {
      setIsPending(true);
      const {
        NIK,
        nama,
        status,
        jumlah_bantuan,
        jenis_bantuan,
        nama_jalan,
        kota,
        kecamatan,
        kelurahan,
        tanggal,
        nomor_telepon,
        nama_penerima_laporan,
        golongan,
        memiliki_tanah_sawah_warung_bengkel,
        memiliki_perhiasan,
        memiliki_kulkas_tv_lcd,
        memiliki_tabung_gas_3kg,
        memiliki_hp_laptop,
        memiliki_kendaraan_bermotor,
        memiliki_tabungan,
      } = data;

      const alamatString = generateAlamatString(
        kota,
        kecamatan,
        kelurahan,
        nama_jalan
      );

      const newMustahikObj: Mustahik = {
        NIK,
        nama,
        alamat: alamatString,
        status,
        jenis_bantuan,
        jumlah_bantuan,
        tanggal,
        nomor_telepon,
        nama_penerima_laporan,
        golongan,
        memiliki_tanah_sawah_warung_bengkel:
          memiliki_tanah_sawah_warung_bengkel as IsOwned,
        memiliki_perhiasan: memiliki_perhiasan as IsOwned,
        memiliki_kulkas_tv_lcd: memiliki_kulkas_tv_lcd as IsOwned,
        memiliki_tabung_gas_3kg: memiliki_tabung_gas_3kg as IsOwned,
        memiliki_hp_laptop: memiliki_hp_laptop as IsOwned,
        memiliki_kendaraan_bermotor: memiliki_kendaraan_bermotor as IsOwned,
        memiliki_tabungan: memiliki_tabungan as IsOwned,
      };

      // console.log(newMustahikObj)
      const res = await tambahData(newMustahikObj);
      if (res.success) {
        toast.success(res.success);
        router.push("/dashboard");
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return {
    isPending,
    router,
    form,
    handleTambahData,
    activeTab,
    handleDrop,
    isPendingUpload,
    setActiveTab,
    files,
  };
};
