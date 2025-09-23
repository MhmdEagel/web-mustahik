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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DatePicker from "@/components/ui/date-picker";

export default function FilterDataForm() {
  const { form, handleFilterData, router } = useFilterData();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFilterData)}
        className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="NIK"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIK</FormLabel>
              <FormControl>
                <Input
                  placeholder="NIK"
                  {...field}
                  value={field.value}
                  autoComplete="off"
                />
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
                <Input
                  placeholder="Alamat"
                  {...field}
                  value={field.value}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jenis_bantuan"
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
                <Input
                  placeholder="Nama"
                  {...field}
                  value={field.value}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomor_telepon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Telepon</FormLabel>
              <FormControl>
                <Input
                  placeholder="No. Telepon"
                  {...field}
                  value={field.value}
                  autoComplete="off"
                />
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
                    <SelectItem value="belum_terverifikasi">
                      Belum Terverifikasi
                    </SelectItem>
                    <SelectItem value="sudah_menerima">
                      Sudah Menerima Bantuan
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DatePicker form={form} />
        <FormField
          control={form.control}
          name="nama_penerima_laporan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Penerima Laporan</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nama Penerima Laporan"
                  {...field}
                  value={field.value}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 flex justify-end space-x-2 ">
          <Button
            onClick={() => router.replace("/dashboard")}
            className="w-fit bg-red-600 hover:bg-red-600/80"
          >
            Hapus Filter
          </Button>
          <Button
            type="submit"
            className="w-fit bg-foreground hover:bg-foreground/80"
          >
            <Search /> Filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
