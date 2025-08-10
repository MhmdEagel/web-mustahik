"use client";

import { deleteData } from "@/actions/delete-data";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteBtn({ mustahikId }: { mustahikId?: string }) {
  const [isPending, setIsPending] = useState(false);
  return (
    <form
      action={async (formData) => {
        setIsPending(true);
        try {
          const res = await deleteData(formData);
          if (res?.success) toast.success(res.success);
          setIsPending(false);
        } catch (e) {
          toast.error((e as Error).message);
        }
      }}
    >
      <input type="hidden" name="id" value={mustahikId} />
      <Button
        type="submit"
        className="bg-red-600 hover:bg-red-600/70"
        size={"icon"}
      >
        <Trash />
      </Button>
    </form>
  );
}
