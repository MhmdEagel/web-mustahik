import { Skeleton } from "@/components/ui/skeleton";
import TambahData from "@/components/views/DataMustahik/TambahData/TambahData";
import { createMetadata } from "@/lib/utils";
import { Suspense } from "react";

export const generateMetadata = () => createMetadata({ title: "Tambah Data" });

export default function TambahDataPage() {
  return (
    <Suspense
      fallback={<Skeleton className="w-full h-[420px] rounded-xl mt-4" />}
    >
      <TambahData />
    </Suspense>
  );
}
