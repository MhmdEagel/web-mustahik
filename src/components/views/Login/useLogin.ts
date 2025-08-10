import loginUser from "@/actions/login";
import { loginSchema } from "@/schemas/login";
import { ILogin } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setError } = form;

  const handleVisibility = () => setIsVisible(!isVisible);
  const handleFormLogin = async (data: ILogin) => {
    try {
      setIsPending(true);
      await loginUser(data);
    } catch (e) {
      setError("root", { message: (e as Error).message });
    } finally {
      setIsPending(false);
    }
  };

  return {
    form,
    isVisible,
    isPending,
    handleVisibility,
    handleFormLogin,
  };
};
