import { tambahData } from "@/actions/tambah-data";
import { generateAlamatString } from "@/lib/utils";
import { tambahEditData } from "@/schemas/tambah-edit-data";
import { Mustahik } from "@/types/Data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const useTambahData = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    defaultValues: {
      nik: "",
      nama: "",
      status: "", 
      jumlahBantuan: "",
      jenisBantuan: "",
      namaJalan: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      nomorTelepon: "",
      namaPenerimaLaporan: ""
    },
    resolver: zodResolver(tambahEditData),
  });

  const handleTambahData = async (data: z.infer<typeof tambahEditData>) => {
    try {
      setIsPending(true);
      const {
        nik,
        nama,
        status,
        jumlahBantuan,
        jenisBantuan,
        namaJalan,
        kota,
        kecamatan,
        kelurahan,
        tanggal,
        nomorTelepon,
        namaPenerimaLaporan,
      } = data;
      
      const alamatString = generateAlamatString(
        kota,
        kecamatan,
        kelurahan,
        namaJalan
      );
      const newMustahikObj: Mustahik = {
        nik,
        nama,
        alamat: alamatString,
        status,
        jenisBantuan,
        jumlahBantuan,
        tanggal,
        nomorTelepon,
        namaPenerimaLaporan,
      };

      // console.log(newMustahikObj)
     const res = await tambahData(newMustahikObj);
      if(res.success) router.push("/dashboard")
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return {
    router,
    form,
    handleTambahData,
  };
};
