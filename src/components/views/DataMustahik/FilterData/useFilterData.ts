import { filterSchema } from "@/schemas/filter-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

export const useFilterData = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      nama: "",
      alamat: "",
      jenis_bantuan: "",
      NIK: "",
      nomor_telepon: "",
      status: "",
      nama_penerima_laporan: "",
    },
  });

  const handleFilterData = (data: z.infer<typeof filterSchema>) => {
    const query = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        if (value instanceof Date) {
          query.set(key, value.toISOString()); // kirim format ISO
        } else {
          query.set(key, String(value));
        }
      }
    });
    router.push(`/dashboard?${query.toString()}`);
    form.reset();
  };
  return {
    form,
    handleFilterData,
    router,
  };
};
