import { Card, CardContent } from "@/components/ui/card";
import { getMustahikDataById } from "@/data/mustahik";
import DetailDataItem from "./DetailDataItem/DetailDataItem";
import { generateDateString, moneyFormatter } from "@/lib/utils";
import DetailDataAction from "./DetailDataAction/DetailDataAction";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  if (!dataMustahik) {
    return (
      <div className="flex flex-col text-center justify-center items-center min-h-[400px] space-y-4">
        <Image
          src={"/ilustration/not-found.svg"}
          width={300}
          height={300}  
          alt="404 not found"
        />
        <div className="text-foreground text-2xl font-bold mb-2">
          Data Tidak Ditemukan
        </div>
        <Link href={"/dashboard"}>
          <Button className="bg-[#157145] hover:bg-[#157145]/70">
            Kembali
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(dataMustahik).map(([key, value]) => {
        const label = key.split("_").join(" ");

        if (key === "id") return null;
        if (key === "status") {
          const status_value = (value as string).split('_').join(" ")
          return <DetailDataItem key={key} label={label} value={status_value} />;
        }
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
