import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import EditData from "@/components/views/DataMustahik/EditData/EditData";
import { createMetadata } from "@/lib/utils";
import { Suspense } from "react";

export const generateMetadata = () => createMetadata({ title: "Edit Data" });


export default async function EditDatapage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <Card>
          <CardContent>
            <div className="flex justify-center items-center h-[400px] text-primary">
              <Spinner size={50} variant="circle" />
            </div>
          </CardContent>
        </Card>
      }
    >
      <EditData mustahikId={id} />
    </Suspense>
  );
}
