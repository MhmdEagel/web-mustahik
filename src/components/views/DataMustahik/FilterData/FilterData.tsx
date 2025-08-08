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
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FilterData() {
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
              <FormLabel>Jenis Bantuan</FormLabel>
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
        <div className="col-span-2 flex justify-end">
          <Button type="submit" className="w-fit bg-foreground">
            <Search /> Filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
