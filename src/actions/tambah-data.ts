"use server";

import { db } from "@/lib/db";
import { Mustahik } from "@/types/Data";
import { revalidatePath } from "next/cache";

export const tambahData = async (data: Mustahik) => {
  try {
    await db.mustahik.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/dashboard")
    return {success: "Data berhasil ditambah"}
  } catch (e) {
    throw new Error((e as Error).message)
  }
};
 