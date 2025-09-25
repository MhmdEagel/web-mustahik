"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { useEditDataForm } from "./useEditDataForm";
import { KOTA_KABUPATEN_LIST } from "@/components/constants/kota-kabupaten.constant";
import MoneyInput from "@/components/ui/money-input";
import { Mustahik } from "@/types/Data";
import { Spinner } from "@/components/ui/spinner";

export default function EdiDataForm({
  mustahikData,
}: {
  mustahikData: Mustahik;
}) {
  const { form, router, handleEditData, isPending } = useEditDataForm({
    mustahikData,
  });
  return (
    <Card className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleEditData)}
          className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}
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
                    value={field.value ?? ""}
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
                    value={field.value ?? ""}
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
                    value={field.value ?? ""}
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
                    value={field.value ?? ""}
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
                    value={field.value ?? ""}
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kota/Kabupaten" />
                    </SelectTrigger>
                    <SelectContent>
                      {KOTA_KABUPATEN_LIST.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
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
                  <Input
                    placeholder="Kecamatan"
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
            name="nama_penerima_laporan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Penerima Laporan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nama Penerima Laporan"
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
            name="kelurahan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kelurahan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kelurahan"
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
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
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
                      <SelectItem value="prioritas_1">Prioritas 1</SelectItem>
                      <SelectItem value="prioritas_2">Prioritas 2</SelectItem>
                      <SelectItem value="prioritas_3">Prioritas 3</SelectItem>
                      <SelectItem value="prioritas_4">Prioritas 4</SelectItem>
                      <SelectItem value="prioritas_5">Prioritas 5</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Card className="col-span-2">
            <CardHeader>
              <div className="font-bold">Kepemilikan Asset</div>
            </CardHeader>
            <CardContent>
              <div className="gap-4 grid lg:grid-cols-2">
                <FormField
                  control={form.control}
                  name="memiliki_tanah_sawah_warung_bengkel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">
                        Memiliki tanah dan/atau sawah dan/atau warung dan/atau
                        bengkel
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="memiliki_perhiasan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memiliki perhiasan</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="memiliki_kulkas_tv_lcd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Memiliki kulkas dan/atau tv dan/atau lcd
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="memiliki_tabung_gas_3kg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memiliki tabung gas 3kg</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="memiliki_hp_laptop"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memiliki Handphone dan/atau laptop</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="memiliki_tabungan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memiliki Tabungan</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="memiliki_kendaraan_bermotor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memiliki kendaraan bermotor</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Opsi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="YA">Ya</SelectItem>
                            <SelectItem value="TIDAK">Tidak</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
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
              {isPending ? (
                <Spinner variant="circle" color="white" />
              ) : (
                "Simpan"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
