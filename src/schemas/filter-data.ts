import z from "zod";

export const filterSchema = z.object({
  NIK: z.string().max(16, { message: "NIK maksimal 16 karakter" }).optional(),
  alamat: z.string().optional(),
  jenis_bantuan: z.string().optional(),

  nama: z.string().optional(),
  nomor_telepon: z.string().optional(),
  status: z.string().optional(),
  tanggal: z.date().optional(),
  nama_penerima_laporan: z.string().optional(),
});
