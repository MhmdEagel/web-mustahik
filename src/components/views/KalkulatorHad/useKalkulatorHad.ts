import { hitungHadKifayah } from "@/actions/hitung-had";
import { getPrioritasBantuan } from "@/lib/utils";
import { kalkulatorSchema } from "@/schemas/kalkulator-had";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface IHadKifayah {
  pendapatan: number;
  pengeluaran: number;
  hadKifayah: number;
}

export const useKalkulatorHad = () => {
  const form = useForm({
    resolver: zodResolver(kalkulatorSchema),
  });

  const [hadKifayah, setHadKifayah] = useState<IHadKifayah>({
    pendapatan: 0,
    pengeluaran: 0,
    hadKifayah: 0,
  });

  const [routeParams, setRouteParams] = useState("");

  const [open, setOpen] = useState(false);

  const isSewaKontrakSelected = form.watch("memiliki_rumah_kontrak");
  const isBansosSelected = form.watch("bansos");
  const isBpjsSelected = form.watch("bpjs_kis_pbi");
  const isHutangSelected = form.watch("beban_keuangan");

  const handleKalkulatorHad = async (
    data: z.infer<typeof kalkulatorSchema>
  ) => {
    const res = await hitungHadKifayah(data);
    const { nama_mustahik, kelurahan, kecamatan, kota_kabupaten, nama_jalan } =
      data;
    setHadKifayah({
      pendapatan: res.sumPendapatanKeluarga,
      pengeluaran: res.sumPengeluaranKeluarga,
      hadKifayah: res.sisaHadKifayah,
    });

    const golongan = getPrioritasBantuan(res.sumPendapatanKeluarga)
    const params = new URLSearchParams({
      nama: nama_mustahik,
      nama_jalan,
      kelurahan,
      kecamatan,
      kota: kota_kabupaten,
      golongan: golongan!
    });

    setRouteParams(params.toString());
    setOpen(true);
  };

  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  return {
    form,
    router,
    isPending,
    isSewaKontrakSelected,
    isBansosSelected,
    isBpjsSelected,
    isHutangSelected,
    handleKalkulatorHad,
    open,
    setOpen,
    hadKifayah,
    routeParams
  };
};
