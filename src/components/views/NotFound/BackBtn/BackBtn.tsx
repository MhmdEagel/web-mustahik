"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="bg-[#157145] hover:bg-[#157145]/70"
    >
      Kembali
    </Button>
  );
}
