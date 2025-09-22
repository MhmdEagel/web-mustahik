import { Label } from "@/components/ui/label";

interface PropTypes {
  label: string;
  value: string;
}

export default function DetailDataItem(props: PropTypes) {
  const { label, value } = props;
  
  return (
    <div className="grid grid-cols-1 gap-2">
      <Label className="capitalize">{label}</Label>
      <div className="flex w-full border px-3 py-1 rounded-lg capitalize">{value}</div>
    </div>
  );
}
