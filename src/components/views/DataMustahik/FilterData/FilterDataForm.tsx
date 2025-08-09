"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFilterData } from "./useFilterData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";


export default function FilterDataForm() {
  const { form } = useFilterData();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))} className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIK</FormLabel>
              <FormControl>
                <Input placeholder="NIK" {...field} value={field.value} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Input placeholder="Alamat" {...field} value={field.value} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jenisBantuan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Bantuan</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Jenis Bantuan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kesehatan">Kesehatan</SelectItem>
                    <SelectItem value="pendidikan">Makanan</SelectItem>
                    <SelectItem value="sosial">Sosial</SelectItem>
                    <SelectItem value="dakwah">Dakwah</SelectItem>
                    <SelectItem value="ekonomi">Ekonomi</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Nama" {...field} value={field.value} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="noTelepon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Telepon</FormLabel>
              <FormControl>
                <Input placeholder="No. Telepon" {...field} value={field.value} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Jenis Bantuan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terverifikasi">Terverifikasi</SelectItem>
                    <SelectItem value="belum_terverifikasi">Belum Terverifikasi</SelectItem>
                    <SelectItem value="sudah_menerima">Sudah Menerima Bantuan</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="tanggal"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Tanggal</FormLabel>
                {/* popover */}
                <Popover>
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
                        format(field.value, "PPP HH:mm:ss")
                      ) : (
                        <span>Pilih Tanggal</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
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
          <FormField
          control={form.control}
          name="nama_penerima"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Penerima Laporan</FormLabel>
              <FormControl>
                <Input placeholder="Nama Penerima Laporan" {...field} value={field.value} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 flex justify-end">
          <Button type="submit" className="w-fit bg-foreground">
            <Search /> Filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
