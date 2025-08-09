import { Button } from "@/components/ui/button";
import FilterData from "./FilterData/FilterData";
import { Plus } from "lucide-react";

export default function DataMustahik() {
  return (
    <div className="p-4 space-y-4">
      <FilterData />
      <div>
        <Button className="bg-[#157145] hover:bg-[#157145]/70"><Plus /> Tambah Data</Button>
      </div>
    </div>
  );
}
