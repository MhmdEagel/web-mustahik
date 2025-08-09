"use client";

import { FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "./calendar";
import { UseFormReturn } from "react-hook-form";
import { useState } from "react";

type TextInputProps = {
  form: UseFormReturn<any>;
};

export default function DatePicker(props: TextInputProps) {
  const { form } = props;
  const [open, setOpen] = useState(false);
  return (
    <FormField
      control={form.control}
      name="tanggal"
      render={({ field }) => (
        <FormItem className="flex flex-col items-start">
          <FormLabel>Tanggal</FormLabel>
          {/* popover */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pilih Tanggal</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                    field.onChange(date)
                    setOpen(false)
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
