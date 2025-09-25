import { editData } from "@/actions/edit-data";
import { generateAlamatString, getAlamatObj } from "@/lib/utils";
import { editDataSchema } from "@/schemas/tambah-edit-data";
import { Mustahik } from "@/types/Data";
import { zodResolver } from "@hookform/resolvers/zod";
import { IsOwned } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const useEditDataForm = ({
  mustahikData,
}: {
  mustahikData: Mustahik;
}) => {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const { alamat } = mustahikData;
  console.log(alamat);
  const formattedAlamat = getAlamatObj(alamat);
  console.log(formattedAlamat);

  const form = useForm({
    defaultValues: {
      id: mustahikData.id,
      NIK: mustahikData.NIK,
      nama: mustahikData.nama,
      nomor_telepon: mustahikData.nomor_telepon,
      kota: formattedAlamat[3],
      kecamatan: formattedAlamat[2],
      kelurahan: formattedAlamat[1],
      nama_jalan: formattedAlamat[0],
      jenis_bantuan: mustahikData.jenis_bantuan,
      jumlah_bantuan: mustahikData.jumlah_bantuan,
      tanggal: mustahikData.tanggal,
      nama_penerima_laporan: mustahikData.nama_penerima_laporan,
      status: mustahikData.status,
      golongan: mustahikData.golongan,
      memiliki_tanah_sawah_warung_bengkel: mustahikData.memiliki_tanah_sawah_warung_bengkel,
      memiliki_perhiasan: mustahikData.memiliki_perhiasan,
      memiliki_kulkas_tv_lcd: mustahikData.memiliki_kulkas_tv_lcd,
      memiliki_tabung_gas_3kg: mustahikData.memiliki_tabung_gas_3kg,
      memiliki_hp_laptop: mustahikData.memiliki_hp_laptop,
      memiliki_kendaraan_bermotor: mustahikData.memiliki_kendaraan_bermotor,
      memiliki_tabungan: mustahikData.memiliki_tabungan,
    },
    resolver: zodResolver(editDataSchema),
  });

  const handleEditData = async (data: z.infer<typeof editDataSchema>) => {
    try {
      setIsPending(true);
      const {
        id,
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
        memiliki_hp_laptop,
        memiliki_kendaraan_bermotor,
        memiliki_kulkas_tv_lcd,
        memiliki_perhiasan,
        memiliki_tabung_gas_3kg,
        memiliki_tabungan,
        memiliki_tanah_sawah_warung_bengkel,
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
        memiliki_hp_laptop: memiliki_hp_laptop as IsOwned,
        memiliki_kendaraan_bermotor:  memiliki_kendaraan_bermotor as IsOwned,
        memiliki_kulkas_tv_lcd:  memiliki_kulkas_tv_lcd as IsOwned,
        memiliki_perhiasan:  memiliki_perhiasan as IsOwned,
        memiliki_tabung_gas_3kg: memiliki_tabung_gas_3kg as IsOwned,
        memiliki_tabungan: memiliki_tabungan as IsOwned,
        memiliki_tanah_sawah_warung_bengkel: memiliki_tanah_sawah_warung_bengkel as IsOwned,
      };

      const res = await editData(id, newMustahikObj);
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
    form,
    router,
    isPending,
    handleEditData,
  };
};
