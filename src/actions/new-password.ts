"use server";

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { INewPassword } from "@/types/Auth";
import bcryptjs from "bcryptjs";

export const newPassword = async (data: INewPassword, userId: string) => {
  const user = await getUserById(userId);
  if (!user) throw new Error("User tidak ditemukan");

  const { oldPassword, newPassword } = data;
  const oldPasswordDb = user.password;

  const isPasswordMatch = await bcryptjs.compare(oldPassword, oldPasswordDb);
  if (!isPasswordMatch) throw new Error("Password salah");

  const newPasswordHashed = await bcryptjs.hash(newPassword, 10);
  try {
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: newPasswordHashed,
      },
    });
    return {success: "Password berhasil di rubah"};
  } catch (e) {
    throw new Error("Something went wrong");
  }
};
