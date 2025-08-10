import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  const hashedPassword = await bcrypt.hash("Izi123!", 10);

  await prisma.user.create({
    data: {
      email: "muhammadeagel@gmail.com",
      password: hashedPassword,
    },
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
