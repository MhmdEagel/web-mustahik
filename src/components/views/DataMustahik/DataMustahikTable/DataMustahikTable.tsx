import { DataTable } from "@/components/ui/data-table";
import { getMustahikData } from "@/data/mustahik";
import { columns } from "./columns";
import { Filters } from "@/types/Filters";

export default async function DataMustahikTable({filters} : {filters?: Filters}) {
  const data = await getMustahikData(filters);

  return (
    <div className="w-full pt-4 pb-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
