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
import { useKalkulatorHad } from "./useKalkulatorHad";
import { Input } from "@/components/ui/input";
import MoneyInput from "@/components/ui/money-input";

export default function KalkulatorHad() {
  const { form } = useKalkulatorHad();

  return (
    <Card>
      <CardHeader>
        <div className="text-xl font-bold">Input Data</div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-2">
            <Card>
              <CardHeader>
                <div className="text-lg">Data Mustahik</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nama_mustahik"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Mustahik</FormLabel>
                        <FormControl>
                          <Input placeholder="Nama Mustahik" {...field} />
                        </FormControl>
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
                    name="kota_kabupaten"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kota/Kabupaten</FormLabel>
                        <FormControl>
                          <Input placeholder="Kota/Kabupaten" {...field} />
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
                          <Input placeholder="Nama Jalan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-lg">Sumber Pendapatan</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                  <MoneyInput
                    form={form}
                    label="Pendapatan Kepala Keluarga"
                    name="pendapatan_kepala_keluarga"
                    placeholder="Pendapata Kepala Keluarga"
                  />
                  <MoneyInput
                    form={form}
                    label="Pendapatan Anggota Lain Per Bulan"
                    name="pendapatan_anggota_lain_per_bulan"
                    placeholder="Pendapatan Anggota Lain Per Bulan"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-lg">Sumber Pendapatan</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                  <MoneyInput
                    form={form}
                    label="Kepala Rumah Tangga"
                    name=""
                    placeholder="Pendapatan Anggota Lain Per Bulan"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
