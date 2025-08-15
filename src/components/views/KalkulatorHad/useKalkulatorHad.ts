import { kalkulatorSchema } from "@/schemas/kalkulator-had";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useKalkulatorHad = () => {
  const form = useForm({
    resolver: zodResolver(kalkulatorSchema),
  });
const [isPending, setIsPending] = useState (false)
  const router = useRouter ()
  return {form,router, isPending};
};

