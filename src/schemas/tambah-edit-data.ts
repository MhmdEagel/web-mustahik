import z from "zod";

export const tambahEditData = z.object({
  nik: z
    .string({
      error: (is) =>
        is.input === undefined ? "NIK tidak boleh kosong" : "Input invalid",
    })
    .min(8, { error: "NIK minimal 8 karakter" })
    .max(16, { error: "NIK maksimal 16 karakter" })
    .regex(/^\d+$/, { error: "NIK hanya boleh berisi angka" }),

  nama: z
    .string({
      error: (is) =>
        is.input === undefined ? "Nama tidak boleh kosong" : "Input invalid",
    })
    .min(3, { error: "Nama minimal 3 karakter" }),

  namaJalan: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Nama Jalan tidak boleh kosong"
          : "Input invalid",
    })
    .min(3, { error: "Nama jalan minimal 3 karakter" }),

  nomorTelepon: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Nomor Telepon tidak boleh kosong"
          : "Input invalid",
    })
    .regex(/^08\d{7,11}$/, { error: "Nomor telepon tidak valid" }),

  kota: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Jumlah Bantuan tidak boleh kosong"
          : "Input invalid",
    })
    .min(1, { error: "Kota/Kabupaten wajib diisi" }),

  kecamatan: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Kecamatan tidak boleh kosong"
          : "Input invalid",
    })
    .min(1, { error: "Kecamatan wajib diisi" }),

  kelurahan: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Kelurahan tidak boleh kosong"
          : "Input invalid",
    })
    .min(1, { error: "Kelurahan wajib diisi" }),

  jenisBantuan: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Jenis Bantuan tidak boleh kosong"
          : "Input invalid",
    })
    .min(1, { error: "Jenis bantuan wajib dipilih" }),
  jumlahBantuan: z.coerce
    .number({
      error: (is) =>
        is.input === undefined
          ? "Jumlah Bantuan tidak boleh kosong"
          : "Input invalid",
    })
    .min(1, { error: "Jumlah bantuan wajib diisi" }),

  tanggal: z.date({
    error: (is) =>
      is.input === undefined ? "Tanggal harus dipilih" : "Input invalid",
  }),

  namaPenerimaLaporan: z
    .string({
      error: (is) =>
        is.input === undefined
          ? "Nama Penerima Laporan tidak boleh kosong"
          : "Input invalid",
    })
    .min(3, { error: "Nama penerima laporan minimal 3 karakter" }),

  status: z
    .string({
      error: (is) =>
        is.input === undefined ? "Status harus dipilih" : "Input invalid",
    })
    .min(1, { error: "Status wajib dipilih" }),
});
