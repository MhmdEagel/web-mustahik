import z from "zod";

export const filterSchema = z.object({
  nik: z
    .string()
    .max(16, { message: "NIK maksimal 16 karakter" })
    .regex(/^\d+$/, { message: "NIK hanya boleh angka" })
    .optional()
    ,

  alamat: z.string().optional(),

  jenisBantuan: z.string().min(1, { message: "Jenis Bantuan harus dipilih" }).optional(),

  nama: z.string().min(3, { message: "Nama minimal 3 karakter" }).optional(),

  noTelepon: z
    .string()
    .min(10, { message: "No. Telepon minimal 10 digit" })
    .regex(/^\d+$/, { message: "No. Telepon hanya boleh angka" }).optional(),

  status: z.string().optional(),
});
