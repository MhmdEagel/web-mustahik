import { IsOwned, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { fakerID_ID as faker } from "@faker-js/faker";
const prisma = new PrismaClient();
async function main() {
  // ### Seed User
  // const hashedPassword = await bcrypt.hash("Izi123!", 10);
  // await prisma.user.create({
  //   data: {
  //     email: "muhammadeageltri@gmail.com",
  //     password: hashedPassword,
  //   },
  // });

  // ### Seed Data Mustahik
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

  const isOwnedArr = ["YA", "TIDAK"];
  const jenisBantuanArr = [
    "kesehatan",
    "pendidikan",
    "sosial",
    "dakwah",
    "ekonomi",
  ];
  const statusArr = ["terverifikasi", "belum_terverifikasi", "sudah_menerima"];

  await prisma.mustahik.createMany({
    data: Array.from({ length: 100 }).map(() => ({
      NIK: faker.string.numeric({ length: { min: 16, max: 16 } }),
      golongan: `prioritas_${faker.number.int({ min: 1, max: 5 })}`,
      nama: faker.person.fullName(),
      alamat: `Jl. ${faker.lorem.word()}, Kel. ${faker.lorem.word()}, Kec. ${faker.lorem.word()}, ${faker.location.city()}`,
      jenis_bantuan:
        jenisBantuanArr[
          faker.number.int({ min: 0, max: jenisBantuanArr.length - 1 })
        ],
      jumlah_bantuan: faker.number.int({ min: 500_000, max: 10_000_0000 }),
      nomor_telepon: faker.phone.number({ style: "national" }),
      status:
        statusArr[faker.number.int({ min: 0, max: statusArr.length - 1 })],
      nama_penerima_laporan: faker.person.firstName(),
      tanggal: new Date().toISOString(),
      memiliki_tanah_sawah_warung_bengkel: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_perhiasan: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_kulkas_tv_lcd: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_tabung_gas_3kg: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_hp_laptop: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_kendaraan_bermotor: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
      memiliki_tabungan: isOwnedArr[
        faker.number.int({ min: 0, max: isOwnedArr.length - 1 })
      ] as IsOwned,
    })),
  });
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
