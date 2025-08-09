import { tambahEditData } from "@/schemas/tambah-edit-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useEditData = () => {
  const router = useRouter()

 const form = useForm({
    resolver: zodResolver(tambahEditData),
  });

  return {
    form,
    router
  };
}
