import { tambahData } from "@/actions/tambah-data";
import { generateAlamatString } from "@/lib/utils";
import { tambahDataSchema } from "@/schemas/tambah-edit-data";
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
      jumlah_bantuan: 0,
    },
    resolver: zodResolver(tambahDataSchema),
  });

  const handleTambahData = async (data: z.infer<typeof tambahDataSchema>) => {
    console.log(data);

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
      };

      // console.log(newMustahikObj)
      const res = await tambahData(newMustahikObj);
      if (res.success) {
        toast.success(res.success)
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
  };
};
