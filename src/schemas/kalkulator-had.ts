import { z } from "zod";

export const kalkulatorSchema = z
  .object({
    // Data Mustahik
    nama_mustahik: z.string({
      error: (iss) =>
        iss.input === undefined ? "Nama mustahik wajib diisi" : "Input Invalid",
    }),
    kecamatan: z.string({
      error: (iss) =>
        iss.input === undefined ? " Kecamatan wajib diisi" : "Input Invalid",
    }),
    kelurahan: z.string({
      error: (iss) =>
        iss.input === undefined ? "Kelurahan wajib diisi" : "Input Invalid",
    }),
    kota_kabupaten: z.string({
      error: (iss) =>
        iss.input === undefined
          ? "Kota/Kabupaten wajib diisi"
          : "Input Invalid",
    }),
    nama_jalan: z.string({
      error: (iss) =>
        iss.input === undefined ? "Nama jalan wajib diisi" : "Input Invalid",
    }),
    // Sumber Pendapatan
    pendapatan_kepala_keluarga: z.coerce
      .number({
        error: (iss) =>
          iss.input === undefined || !iss.input
            ? "Pendapatan keluarga wajib diisi"
            : "Input Invalid",
      })
      .positive("Nilai harus positif"),
    pendapatan_anggota_lain_per_bulan: z.coerce
      .number()
      .positive("Nilai harus positif")
      .optional(),

    // Pengeluaran Keluarga Per Bulan
    kepala_rumah_tangga: z.coerce.number({
      error: (iss) =>
        iss.input === undefined || !iss.input
          ? "Pengeluaran kepala keluarga wajib diisi"
          : "Input Invalid",
    }),
    ibu_rumah_tangga: z.coerce.number({
      error: (iss) =>
        iss.input === undefined || !iss.input
          ? "Pengeluaran ibu rumah tangga wajib diisi"
          : "Input Invalid",
    }),
    anak_dewasa_bekerja: z.coerce.number().optional(),
    anak_dewasa_tidak_bekerja: z.coerce.number().optional(),
    anak_sekolah_sma: z.coerce.number().optional(),
    anak_sekolah_smp: z.coerce.number().optional(),
    anak_sekolah_sd: z.coerce.number().optional(),
    anak_bayi_belum_sekolah: z.coerce.number().optional(),
    biaya_perguruan_tinggi: z.coerce.number().optional(),

    // Pengeluaran Tambahan Per Bulan
    penyandang_disabilitas: z.coerce.number().optional(),
    ibu_menyusui: z.coerce.number().optional(),
    ibu_hamil: z.coerce.number().optional(),
    status_janda_bekerja: z.coerce.number().optional(),
    status_janda_tidak_bekerja: z.coerce.number().optional(),

    // Status Tempat Tinggal
    memiliki_rumah_kontrak: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib dipilih" : "Input Invalid",
    }),
    biaya_sewa_per_bulan: z.coerce.number().optional(),
    penerangan_listrik: z.string().optional(),

    // Menerima Bantuan Pemerintah
    bansos: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    jumlah_bantuan_bansos: z.coerce
      .number({
        error: (iss) =>
          iss.input === undefined || !iss.input
            ? "Jumlah bantuan bansos wajib diisi"
            : "Input Invalid",
      })
      .optional(),
    bpjs_kis_pbi: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    jumlah_iuran_bpjs: z.coerce.number().optional(),
    jumlah_biaya_kesehatan: z.coerce.number().optional(),

    // Kepemilikan Asset
    memiliki_tanah_sawah_warung_bengkel: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_perhiasan : z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_kulkas_tv_lcd : z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_tabung_gas_3kg: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_hp_laptop: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_kendaraan_bermotor: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    memiliki_tabungan: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    // Beban Keuangan
    beban_keuangan: z.string({
      error: (iss) =>
        iss.input === undefined ? " wajib diisi" : "Input Invalid",
    }),
    jumlah_hutang: z.coerce.number().optional(),
  })
  ;
