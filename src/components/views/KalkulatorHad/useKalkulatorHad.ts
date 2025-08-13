import { kalkulatorSchema } from "@/schemas/kalkulator-had";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useKalkulatorHad = () => {
  const form = useForm({
    resolver: zodResolver(kalkulatorSchema),
  });

  return {form};
};
