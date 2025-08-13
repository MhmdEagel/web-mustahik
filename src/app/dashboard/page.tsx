import DataMustahik from "@/components/views/DataMustahik/DataMustahik";
import { createMetadata } from "@/lib/utils";

export const generateMetadata = () => createMetadata({ title: "Dashboard" });

export default async function DataMustahikPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {

  const urlSearchParams = await searchParams;
  console.log(urlSearchParams)
  return <DataMustahik searchParams={urlSearchParams} />;
}
