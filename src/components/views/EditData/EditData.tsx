"use client";

import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useEditData } from "./useEditData";
import { KOTA_KABUPATEN_LIST } from "@/components/constants/kota-kabupaten.constant";

export default function TambahData() {
  const { form, router } = useEditData();
  return (
    <Card className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}
        >
          <FormField
            control={form.control}
            name="nik"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIK</FormLabel>
                <FormControl>
                  <Input placeholder="NIK" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="namaJalan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Jalan</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Jalan" {...field} />
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
                  <Input placeholder="Nama" {...field} />
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
            name="nomorTelepon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input placeholder="Nomor Telepon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jumlahBantuan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah Bantuan</FormLabel>
                <FormControl>
                  <Input placeholder="Jumlah Bantuan" {...field} />
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
                <FormLabel>Kota/ Kabupaten</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kota/Kabupaten" />
                    </SelectTrigger>
                    <SelectContent>
                      {KOTA_KABUPATEN_LIST.map((item) => (
                        <SelectItem key={item.key} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
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
            name="kecamatan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kecamatan</FormLabel>
                <FormControl>
                  <Input placeholder="Kecamatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="namaPenerimaLaporan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Penerima Laporan</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Penerima Laporan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kelurahan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kelurahan</FormLabel>
                <FormControl>
                  <Input placeholder="Kelurahan" {...field} />
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
                      <SelectItem value="terverifikasi">
                        Terverifikasi
                      </SelectItem>
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
          <div className="flex justify-end col-span-2 space-x-4">
            <Button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="px-6 py-2 bg-[#E7000B] hover:bg-[#E7000B]/70 text-white rounded-lg"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-[#157145] hover:bg-[#157145]/70 text-white rounded-lg"
            >
              Simpan
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
