import TambahData from '@/components/views/DataMustahik/TambahData/TambahData'
import { createMetadata } from '@/lib/utils';

export const generateMetadata = () => createMetadata({ title: "Tambah Data" });


export default function TambahDataPage() {
  return (
    <TambahData />
  )
}
