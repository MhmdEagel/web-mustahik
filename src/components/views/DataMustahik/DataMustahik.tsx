import { Button } from "@/components/ui/button";
import FilterData from "./FilterData/FilterData";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import DataMustahikTable from "./DataMustahikTable/DataMustahikTable";
import { Skeleton } from "@/components/ui/skeleton";

export default function DataMustahik() {
  return (
    <div className="space-y-4">
      <FilterData />
      <div>
        <Link className="mb-4" href={"/dashboard/tambah-data"}>
          <Button className="bg-[#157145] hover:bg-[#157145]/70">
            <Plus /> Tambah Data
          </Button>
        </Link>
        <Suspense
          fallback={<Skeleton className="w-full h-[420px] rounded-xl mt-4" />}
        >
          <DataMustahikTable />
        </Suspense>
      </div>
    </div>
  );
}
