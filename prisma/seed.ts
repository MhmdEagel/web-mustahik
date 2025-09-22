import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  const hashedPassword = await bcrypt.hash("Izi123!", 10);

  await prisma.user.create({
    data: {
      email: "muhammadeageltri@gmail.com",
      password: hashedPassword,
      
    },
  });

  // await prisma.mustahik.create({
  //   data: {
  //     NIK: "1471081003050021",
  //     golongan: "prioritas_1",
  //     nama: "Muhammad Eagel T.",
  //     alamat: "Jl. Pendidikan, Kec. Tampan, Kel. Sidomulyo Barat, pekanbaru",
  //     jenis_bantuan: "kesehatan",
  //     jumlah_bantuan: 10000000,
  //     nomor_telepon: "081234567890",
  //     status: "sudah_menerima",
  //     nama_penerima_laporan: "Gibran",
  //     tanggal: new Date().toISOString()
  //   }
  // })

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
