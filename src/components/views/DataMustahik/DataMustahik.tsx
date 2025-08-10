import { Button } from "@/components/ui/button";
import FilterData from "./FilterData/FilterData";
import { Plus } from "lucide-react";
import Link from "next/link";
import DataMustahikTable from "./DataMustahikTable/DataMustahikTable";
import { Toaster } from "@/components/ui/sonner";

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
          <DataMustahikTable />
        </div>
        <Toaster />
      </div>
  );
}
