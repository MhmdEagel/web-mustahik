"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLogin } from "./useLogin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export default function Login() {
  const { form, isVisible, handleVisibility, isPending, handleFormLogin } =
    useLogin();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardContent>
            <Form {...form}>
              <form
                className="flex flex-col gap-6 "
                onSubmit={form.handleSubmit(handleFormLogin)}
              >
                <Image
                  src={"/images/logo_izi.png"}
                  className="block mx-auto"
                  width={120}
                  height={120}
                  alt="Logo IZI"
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            className="pe-9"
                            placeholder="Password"
                            value={field.value ?? ""}
                            type={isVisible ? "text" : "password"}
                          />
                          <button
                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10  =focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="button"
                            onClick={handleVisibility}
                            aria-label={
                              isVisible ? "Hide password" : "Show password"
                            }
                            aria-pressed={isVisible}
                            aria-controls="password"
                          >
                            {isVisible ? (
                              <Eye
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            ) : (
                              <EyeOff
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-foreground hover:bg-foreground/90"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Spinner variant="circle" color="white" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
