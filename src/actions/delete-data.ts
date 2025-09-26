"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { success } from "zod";
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

export const deleteMultipleMustahikDataById = async (
  mustahikIdArr: (string | undefined)[]
) => {
  if(mustahikIdArr) {
    try {
      await db.mustahik.deleteMany({
        where: {
          id: {
            in: mustahikIdArr as string[],
          },
        },
      });
      revalidatePath("/dashboard")
      return {success: "Data berhasil dihapus.", error: null}
    } catch (e) {
      return {success: null, error: "Terjadi Kesalahan"}
    }
  }
  return null
};

