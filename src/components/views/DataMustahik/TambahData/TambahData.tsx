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
import { useTambahData } from "./useTambahData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KOTA_KABUPATEN_LIST } from "@/components/constants/kota-kabupaten.constant";
import MoneyInput from "@/components/ui/money-input";
import DatePicker from "@/components/ui/date-picker";
import { Spinner } from "@/components/ui/spinner";

export default function TambahData() {
  const { form, router, handleTambahData, isPending } = useTambahData();
  return (
    <Card className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleTambahData)}
          className="flex flex-col lg:grid  lg:grid-cols-2 gap-4"
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
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama_jalan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Jalan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nama Jalan"
                    {...field}
                    value={field.value || ""}
                  />
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
                    value={field.value || ""}
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value || ""}
                  >
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
            name="nomor_telepon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nomor Telepon"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MoneyInput
            form={form}
            label="Jumlah Bantuan"
            name="jumlah_bantuan"
            placeholder="Jumlah Bantuan"
          />
          <FormField
            control={form.control}
            name="kota"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kota/ Kabupaten</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
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
          <DatePicker form={form} />
          <FormField
            control={form.control}
            name="kecamatan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kecamatan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kecamatan"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    value={field.value || ""}
                  />
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
                  <Input
                    placeholder="Kelurahan"
                    {...field}
                    value={field.value || ""}
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
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Status" />
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
          <FormField
            control={form.control}
            name="golongan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Golongan</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Golongan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prioritas_1">
                        Prioritas 1
                      </SelectItem>
                      <SelectItem value="prioritas_2">
                        Prioritas 2
                      </SelectItem>
                      <SelectItem value="prioritas_3">
                        Prioritas 3
                      </SelectItem>
                      <SelectItem value="prioritas_4">
                        Prioritas 4
                      </SelectItem>
                      <SelectItem value="prioritas_5">
                        Prioritas 5
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
              disabled={isPending}
              type="submit"
              className="px-6 py-2 bg-[#157145] hover:bg-[#157145]/70 text-white rounded-lg"
            >
              {isPending ? <Spinner color="white" variant="circle" /> : "Simpan"}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
