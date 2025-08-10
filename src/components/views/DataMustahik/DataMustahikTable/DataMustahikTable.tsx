import { DataTable } from "@/components/ui/data-table";
import { getMustahikData } from "@/data/mustahik";
import { columns } from "./columns";

export default async function DataMustahikTable() {
  const data = await getMustahikData();

  return (
    <div className="max-w-screen pt-4 pb-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
