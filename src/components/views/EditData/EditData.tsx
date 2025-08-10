import { getMustahikDataById } from "@/data/mustahik";
import EdiDataForm from "./EditDataForm/EditDataForm";

export default async function EditData({ mustahikId }: { mustahikId: string }) {
  const mustahikData = await getMustahikDataById(mustahikId);
  return <EdiDataForm mustahikData={mustahikData!} />;
}
