import { editData } from "@/actions/edit-data";
import { generateAlamatString, getAlamatObj } from "@/lib/utils";
import { editDataSchema } from "@/schemas/tambah-edit-data";
import { Mustahik } from "@/types/Data";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const formattedAlamat = getAlamatObj(alamat);

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
