import DataMustahik from "@/components/views/DataMustahik/DataMustahik";
import { createMetadata } from "@/lib/utils";


export const generateMetadata = () => createMetadata({ title: "Dashboard" });


export default function DataMustahikPage() {
  return (
    <DataMustahik />
  )
}
