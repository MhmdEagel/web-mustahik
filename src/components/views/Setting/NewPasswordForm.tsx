"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNewPasswordForm } from "./useNewPasswordForm";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function NewPasswordForm({ userId }: { userId?: string }) {
  const { form, visibility, handleVisibility, handleNewPassword, isPending } = useNewPasswordForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => handleNewPassword(data, userId!))}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Lama</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    className="pe-9"
                    placeholder="Password Lama"
                    value={field.value ?? ""}
                    type={visibility.oldPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10  =focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={() => handleVisibility("oldPassword")}
                    aria-label={
                      visibility.oldPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={visibility.oldPassword}
                    aria-controls="password"
                  >
                    {visibility.oldPassword ? (
                      <Eye size={16} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Baru</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    className="pe-9"
                    placeholder="Password Baru"
                    value={field.value ?? ""}
                    type={visibility.newPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10  =focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={() => handleVisibility("newPassword")}
                    aria-label={
                      visibility.newPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={visibility.newPassword}
                    aria-controls="password"
                  >
                    {visibility.newPassword ? (
                      <Eye size={16} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    className="pe-9"
                    placeholder="Password Lama"
                    value={field.value ?? ""}
                    type={visibility.confirmPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10  =focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={() => handleVisibility("confirmPassword")}
                    aria-label={
                      visibility.confirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    aria-pressed={visibility.confirmPassword}
                    aria-controls="password"
                  >
                    {visibility.confirmPassword ? (
                      <Eye size={16} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="ml-auto">
          <Button
            disabled={isPending}
            className="bg-foreground hover:bg-foreground/90"
            type="submit"
          >
            {isPending ? <Spinner variant="circle" color="white" /> : "Ubah Password"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
