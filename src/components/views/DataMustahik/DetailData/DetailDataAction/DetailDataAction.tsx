"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DetailDataAction({mustahikId}: {mustahikId?: string}) {
  const router = useRouter();

  return (
    <div className="flex justify-end col-span-2 space-x-4">
      <Button
        type="button"
        onClick={() => router.push("/dashboard")}
        className="px-6 py-2 bg-[#157145] hover:bg-[#157145]/70 text-white rounded-lg"
      >
        Kembali
      </Button>
      <Button
        type="button"
        onClick={() => router.push(`/dashboard/edit-data/${mustahikId}`)}
        className="px-6 py-2 bg-[#157145] hover:bg-[#157145]/70 text-white rounded-lg"
      >
        Edit
      </Button>
    </div>
  );
}
