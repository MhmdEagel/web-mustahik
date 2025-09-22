import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  getPrioritasBantuan,
  getPrioritasString,
  moneyFormatter,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export default function HasilHadKifayah({
  hadKifayah,
  pendapatan,
  pengeluaran,
  open,
  setOpen,
  form,
  routeParams,
}: {
  pendapatan: number;
  pengeluaran: number;
  hadKifayah: number;
  open: boolean;
  form: UseFormReturn<any>;
  routeParams: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const prioritas = getPrioritasBantuan(pendapatan);
  const router = useRouter()

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mx-auto">
            <Image width={150} height={150} src={"/icons/kalkulator-had.svg"} alt="Kalkulator Icon" />
          </div>
          <AlertDialogTitle className="text-center">Hasil Hitung Had Kifayah</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="text-black">
          <p>
            Total Penghasilan:{" "}
            <span className="font-bold">
              {moneyFormatter.format(pendapatan)}
            </span>
          </p>
          <p>
            Had Kifayah:{" "}
            <span className="font-bold">
              {moneyFormatter.format(pengeluaran)}
            </span>
          </p>
          <p>
            Selisih Had Kifayah:{" "}
            <span className="font-bold">
              {moneyFormatter.format(hadKifayah)}
            </span>
          </p>
          {pendapatan < pengeluaran ? (
            <p className="text-center mt-4">
              Termasuk Mustahik / Penerima Bantuan{" "}
              {getPrioritasString(prioritas!)}
            </p>
          ) : (
            <p className="text-center mt-4">
              Termasuk Muzakki / Pemberi Bantuan
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => router.refresh()}>Batal</AlertDialogCancel>
          {pendapatan < pengeluaran ? (
            <AlertDialogAction>
              <Link href={`/dashboard/tambah-data?${routeParams}`}>
                Input Data
              </Link>{" "}
            </AlertDialogAction>
          ) : null}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
