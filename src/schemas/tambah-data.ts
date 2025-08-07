import z from "zod";

export const tambahDataSchema = z.object({
   nik: z
    .string()
    .min(8, { message: "NIK minimal 8 karakter" })
    .max(16, { message: "NIK maksimal 16 karakter" })
    .regex(/^\d+$/, { message: "NIK hanya boleh berisi angka" }),

  nama: z
    .string()
    .min(3, { message: "Nama minimal 3 karakter" }),

  namaJalan: z
    .string()
    .min(3, { message: "Nama jalan minimal 3 karakter" }),

  nomorTelepon: z
    .string()
    .regex(/^08\d{7,11}$/, { message: "Nomor telepon tidak valid" }),

  kota: z
    .string()
    .min(1, { message: "Kota/Kabupaten wajib diisi" }),

  kecamatan: z
    .string()
    .min(1, { message: "Kecamatan wajib diisi" }),

  kelurahan: z
    .string()
    .min(1, { message: "Kelurahan wajib diisi" }),

  jenisBantuan: z
    .string()
    .min(1, { message: "Jenis bantuan wajib dipilih" }),

  jumlahBantuan: z
    .string()
    .min(1, { message: "Jumlah bantuan wajib diisi" }),

  tanggal: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Tanggal tidak valid",
    }),

  namaPenerimaLaporan: z
    .string()
    .min(3, { message: "Nama penerima laporan minimal 3 karakter" }),

  status: z
    .string()
    .min(1, { message: "Status wajib dipilih" }),
    
});