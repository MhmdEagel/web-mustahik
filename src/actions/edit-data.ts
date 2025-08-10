"use server";

import { getMustahikDataById } from "@/data/mustahik";
import { db } from "@/lib/db";
import { Mustahik } from "@/types/Data";
import { revalidatePath } from "next/cache";

export const editData = async (mustahikId: string, data: Mustahik) => {
  try {
    const mustahik = await getMustahikDataById(mustahikId);

    if (!mustahik) throw new Error("Data Mustahik tidak ditemukan.");
    await db.mustahik.update({
      where: {
        id: mustahik.id,
      },
      data: {
        ...data,
      },
    });
    revalidatePath("/dashboard");
    return { success: "Data berhasil di update" };
  } catch (e) {
    throw new Error("Terjadi Kesalahan.");
  }
};
