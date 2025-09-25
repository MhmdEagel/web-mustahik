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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import HasilHadKifayah from "./HasilHadKifayah/HasilHadKifayah";
import { KOTA_KABUPATEN_LIST } from "@/components/constants/kota-kabupaten.constant";

export default function KalkulatorHad() {
  const {
    form,
    router,
    isPending,
    isSewaKontrakSelected,
    isBansosSelected,
    isBpjsSelected,
    isHutangSelected,
    handleKalkulatorHad,
    open,
    setOpen,
    hadKifayah,
    routeParams,
  } = useKalkulatorHad();

  return (
    <>
      <HasilHadKifayah
        hadKifayah={hadKifayah.hadKifayah}
        pendapatan={hadKifayah.pendapatan}
        pengeluaran={hadKifayah.pengeluaran}
        open={open}
        setOpen={setOpen}
        form={form}
        routeParams={routeParams}
      />
      <Card>
        <CardHeader>
          <div className="text-xl font-bold">Input Data</div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleKalkulatorHad)}>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">Data Mustahik</div>
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
                              <Input
                                placeholder="Nama Mustahik"
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
                        name="kota_kabupaten"
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
                                    <SelectItem
                                      key={item.key}
                                      value={item.value}
                                    >
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
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">Sumber Pendapatan</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <MoneyInput
                        form={form}
                        label="Pendapatan Kepala Keluarga"
                        name="pendapatan_kepala_keluarga"
                        placeholder="Pendapatan Kepala Keluarga"
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
                    <div className="text-lg font-bold">
                      Pengeluaran Keluarga Per Bulan
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <MoneyInput
                        form={form}
                        label="Kepala Rumah Tangga"
                        name="kepala_rumah_tangga"
                        placeholder="Pengeluaran Kepala Rumah Tangga Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Ibu Rumah Tangga"
                        name="ibu_rumah_tangga"
                        placeholder="Pengeluaran Ibu Rumah Tangga Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Dewasa (Bekerja)"
                        name="anak_dewasa_bekerja"
                        placeholder="Pengeluaran Anak Dewasa (Bekerja) Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Dewasa Tidak Bekerja"
                        name="anak_dewasa_tidak_bekerja"
                        placeholder="Pengeluaran Anak Dewasa Tidak Bekerja Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Sekolah SMA"
                        name="anak_sekolah_sma"
                        placeholder="Pengeluaran Anak Sekolah SMA Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Sekolah SMP"
                        name="anak_sekolah_smp"
                        placeholder="Pengeluaran Anak Sekolah SMP Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Sekolah SD"
                        name="anak_sekolah_sd"
                        placeholder="Pengeluaran Anak Sekolah SD Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Anak Bayi Belum Sekolah"
                        name="anak_bayi_belum_sekolah"
                        placeholder="Pengeluaran Anak Bayi Belum Sekolah Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Biaya Perguruan Tinggi"
                        name="biaya_perguruan_tinggi"
                        placeholder="Pengeluaran Biaya Perguruan Tinggi Per Bulan"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">
                      Pengeluaran Tambahan Per Bulan
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <MoneyInput
                        form={form}
                        label="Penyandang Disabilitas"
                        name="penyandang_disabilitas"
                        placeholder="Pengeluaran Penyandang Disabilitas Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Ibu Menyusui"
                        name="ibu_menyusui"
                        placeholder="Pengeluaran Ibu Menyusui Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Ibu Hamil"
                        name="ibu_hamil"
                        placeholder="Pengeluaran Ibu Hamil Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Status Janda (Bekerja)"
                        name="status_janda_bekerja"
                        placeholder="Pengeluaran Status Janda (Bekerja) Per Bulan"
                      />
                      <MoneyInput
                        form={form}
                        label="Status Janda (Tidak Bekerja)"
                        name="status_janda_tidak_bekerja"
                        placeholder="Pengeluaran Status Janda (Tidak Bekerja) Per Bulan"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">
                      Status Tempat Tinggal
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="memiliki_rumah_kontrak"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Memiliki Rumah/Kontrak</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Pilih Opsi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="memiliki_tempat_tinggal">
                                    Memiliki Tempat Tinggal
                                  </SelectItem>
                                  <SelectItem value="tidak_memiliki_tempat_tinggal">
                                    Tidak Memiliki Tempat Tinggal
                                  </SelectItem>
                                  <SelectItem value="Sewa/Kontrak">
                                    Sewa/Kontrak
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
                        name="penerangan_listrik"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Penerangan Listrik</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Pilih Opsi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="450_watt">
                                    450 Watt
                                  </SelectItem>
                                  <SelectItem value="900_watt">
                                    900 Watt
                                  </SelectItem>
                                  <SelectItem value="lebih_dari_900_watt">
                                    Lebih Dari 900 Watt
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {isSewaKontrakSelected === "Sewa/Kontrak" ? (
                        <MoneyInput
                          form={form}
                          label="Biaya sewa per bulan"
                          name="biaya_sewa_per_bulan"
                          placeholder="Biaya Sewa/Kontrak Per Bulan"
                        />
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">
                      Menerima Bantuan Pemerintah
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="bansos"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bansos</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Pilih Opsi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="menerima_bansos">
                                    Menerima Bansos
                                  </SelectItem>
                                  <SelectItem value="tidak_menerima_bansos">
                                    Tidak Menerima Bansos
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
                        name="bpjs_kis_pbi"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PBPJS/KIS/PBI</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Pilih Opsi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="penerima_PBPJS/KIS/PBI">
                                    Penerima PBPJS/KIS/PBI
                                  </SelectItem>
                                  <SelectItem value="BPJS_mandiri">
                                    BPJS Mandiri
                                  </SelectItem>
                                  <SelectItem value="tidak_penerima_PBPJS/KIS/PBI">
                                    Tidak Penerima PBPJS/KIS/PBI
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {isBansosSelected === "menerima_bansos" ? (
                        <MoneyInput
                          form={form}
                          label="Jumlah Bansos"
                          name="jumlah_bantuan_bansos"
                          placeholder="Jumlah Bansos"
                        />
                      ) : null}
                      {isBpjsSelected === "BPJS_mandiri" ? (
                        <MoneyInput
                          form={form}
                          label="Jumlah Iuran BPJS"
                          name="jumlah_iuran_bpjs"
                          placeholder="Jumlah Iuran BPJS Per Bulan"
                        />
                      ) : null}
                      {isBpjsSelected === "tidak_penerima_PBPJS/KIS/PBI" ? (
                        <MoneyInput
                          form={form}
                          label="Jumlah Biaya Kesehatan Per Bulan"
                          name="jumlah_biaya_kesehatan"
                          placeholder="Jumlah Biaya Kesehatan Per Bulan"
                        />
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">Beban Keuangan</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="beban_keuangan"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Beban Keuangan</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Pilih Opsi" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="memiliki_hutang">
                                    Memiliki Hutang
                                  </SelectItem>
                                  <SelectItem value="tidak_memiliki_hutang">
                                    Tidak Memiliki Hutang
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {isHutangSelected === "memiliki_hutang" ? (
                        <MoneyInput
                          form={form}
                          label="Jumlah Hutang Per Bulan"
                          name="jumlah_hutang"
                          placeholder="Jumlah Hutang Per Bulan"
                        />
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="text-lg font-bold">Kepemilikan Aset</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="memiliki_tanah_sawah_warung_bengkel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">
                              Memiliki tanah dan/atau sawah dan/atau warung
                              dan/atau bengkel
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
                            <FormLabel>
                              Memiliki Handphone dan/atau laptop
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
                      <Spinner color="white" variant="circle" />
                    ) : (
                      "Hitung Had Kifayah"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
