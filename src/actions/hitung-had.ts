"use server";

import { getBiayaListrik } from "@/lib/utils";
import { kalkulatorSchema } from "@/schemas/kalkulator-had";
import z from "zod";

export const hitungHadKifayah = async (
  data: z.infer<typeof kalkulatorSchema>
) => {
  // Pendapatan
  const { pendapatan_kepala_keluarga, pendapatan_anggota_lain_per_bulan = 0 } =
    data;

  // Pengeluaran
  const {
    kepala_rumah_tangga,
    ibu_rumah_tangga,
    anak_dewasa_bekerja = 0,
    anak_dewasa_tidak_bekerja = 0,
    anak_sekolah_sma = 0,
    anak_sekolah_smp = 0,
    anak_sekolah_sd = 0,
    anak_bayi_belum_sekolah = 0,
    biaya_perguruan_tinggi = 0,
    penyandang_disabilitas = 0,
    ibu_menyusui = 0,
    ibu_hamil = 0,
    status_janda_bekerja = 0,
    status_janda_tidak_bekerja = 0,
    penerangan_listrik = "",
    biaya_sewa_per_bulan = 0,
    jumlah_bantuan_bansos = 0,
    jumlah_iuran_bpjs = 0,
    jumlah_hutang = 0,
    jumlah_biaya_kesehatan = 0
  } = data;

  const sumPendapatanKeluarga =
    pendapatan_kepala_keluarga +
    pendapatan_anggota_lain_per_bulan +
    jumlah_bantuan_bansos;

  const sumPengeluaranKeluarga =
    kepala_rumah_tangga +
    ibu_rumah_tangga +
    anak_dewasa_bekerja +
    anak_dewasa_tidak_bekerja +
    anak_sekolah_sma +
    anak_sekolah_smp +
    anak_sekolah_sd +
    anak_bayi_belum_sekolah +
    biaya_perguruan_tinggi +
    penyandang_disabilitas +
    ibu_menyusui +
    ibu_hamil +
    status_janda_bekerja +
    status_janda_tidak_bekerja +
    biaya_sewa_per_bulan +
    getBiayaListrik(penerangan_listrik) +
    jumlah_iuran_bpjs +
    jumlah_hutang +
    jumlah_biaya_kesehatan;

    const sisaHadKifayah = sumPendapatanKeluarga - sumPengeluaranKeluarga;
    return {sumPendapatanKeluarga, sumPengeluaranKeluarga, sisaHadKifayah}
};
