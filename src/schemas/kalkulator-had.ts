import { z } from "zod";

export const kalkulatorSchema = z.object({
  // Data Mustahik
  nama_mustahik: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  kecamatan: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  kelurahan: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  kota_kabupaten: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  nama_jalan: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),

  // Sumber Pendapatan
  pendapatan_kepala_keluarga: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    })
    .positive("Nilai harus positif"),
  pendapatan_anggota_lain_per_bulan: z.coerce
    .number({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    })
    .positive("Nilai harus positif"),

  // Pengeluaran Keluarga Per Bulan
  kepala_rumah_tangga: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  ibu_rumah_tangga: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_dewasa_bekerja: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_dewasa_tidak_bekerja: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_sekolah_sma: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_sekolah_smp: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_sekolah_sd: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  anak_bayi_belum_sekolah: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  biaya_perguruan_tinggi: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  beban_keuangan: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),

  // Pengeluaran Tambahan Per Bulan
  penyandang_disabilitas: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  ibu_menyusui: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  ibu_hamil: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  status_janda_tidak_bekerja: z.coerce.number({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),

  // Kepemilikan Asset
  memiliki_kendaraan_bermotor: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  memiliki_tabungan: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),

  // Menerima Bantuan Pemerintah
  bansos: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  bpjs_kis_pbi: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),

  // Status Tempat Tinggal
  memiliki_rumah_kontrak: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
  penerangan_listrik: z.string({
    error: (iss) =>
      iss.input === undefined ? " wajib diisi" : "Input Invalid",
  }),
});
