import { Card, CardContent } from "@/components/ui/card";
import { getMustahikDataById } from "@/data/mustahik";
import DetailDataItem from "./DetailDataItem/DetailDataItem";
import { generateDateString, moneyFormatter } from "@/lib/utils";
import DetailDataAction from "./DetailDataAction/DetailDataAction";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function DetailData({ mustahikId }: { mustahikId: string }) {
  return (
    <Card>
      <CardContent>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[400px] text-primary">
              <Spinner size={50} variant="circle" />
            </div>
          }
        >
          <DetailDataCard mustahikId={mustahikId} />
        </Suspense>
      </CardContent>
    </Card>
  );
}

async function DetailDataCard({ mustahikId }: { mustahikId: string }) {
  const dataMustahik = await getMustahikDataById(mustahikId, false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(dataMustahik!).map(([key, value]) => {
        const label = key.split("_").join(" ");

        if (key === "id") return null;
        if (value instanceof Date) {
          const dateString = generateDateString(value);
          return <DetailDataItem key={key} label={label} value={dateString} />;
        }
        if (typeof value === "number") {
          const formatted = moneyFormatter.format(value);
          return <DetailDataItem key={key} label={label} value={formatted} />;
        }
        return <DetailDataItem key={key} label={label} value={value} />;
      })}
      <DetailDataAction mustahikId={dataMustahik?.id} />
    </div>
  );
}
