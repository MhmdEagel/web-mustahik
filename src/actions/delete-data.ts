"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
export const deleteData = async (formData: FormData) => {
  const mustahikId = formData.get("id") as string;
  try {
    await db.mustahik.delete({
      where: {
        id: mustahikId,
      },
    });
    revalidatePath("/dashboard")
    return {success: "Data berhasil dihapus"}
  } catch (e) {
    throw new Error("Terjadi Kesalahan")
  }
};
