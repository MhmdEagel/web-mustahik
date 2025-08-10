import { getMustahikDataById } from "@/data/mustahik";
import EdiDataForm from "./EditDataForm/EditDataForm";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function EditData({ mustahikId }: { mustahikId: string }) {
  const mustahikData = await getMustahikDataById(mustahikId);

  if (!mustahikData) {
    return (
      <Card>
        <CardContent>
          <div className="flex flex-col text-center justify-center items-center min-h-[400px] text-primary space-y-4">
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
        </CardContent>
      </Card>
    );
  }

  return <EdiDataForm mustahikData={mustahikData} />;
}
