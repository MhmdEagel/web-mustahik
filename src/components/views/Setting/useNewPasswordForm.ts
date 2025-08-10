import { newPassword } from "@/actions/new-password";
import { newPasswordSchema } from "@/schemas/new-password";
import { INewPassword } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useNewPasswordForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [visibility, setVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleVisibility = (
    identifier: "oldPassword" | "newPassword" | "confirmPassword"
  ) => {
    if (identifier === "oldPassword") {
      setVisibility((prevValue) => ({
        ...prevValue,
        oldPassword: !prevValue.oldPassword,
      }));
    } else if (identifier === "newPassword") {
      setVisibility((prevValue) => ({
        ...prevValue,
        newPassword: !prevValue.newPassword,
      }));
    } else {
      setVisibility((prevValue) => ({
        ...prevValue,
        confirmPassword: !prevValue.confirmPassword,
      }));
    }
  };

  const form = useForm({
    resolver: zodResolver(newPasswordSchema),
  });


  const handleNewPassword = async (data: INewPassword, userId: string) => {
    try {
      setIsPending(true)
      const res = await newPassword(data, userId!)
      if(res.success) { 
        toast.success(res.success) 
        form.reset()
      }
    } catch(e) {
      toast.error((e as Error).message)
    } finally {
      setIsPending(false)
    }
  }


  return {
    form,
    isPending,
    handleVisibility,
    visibility,
    handleNewPassword
  };
};
