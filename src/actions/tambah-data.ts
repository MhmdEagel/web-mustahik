"use server";

import { db } from "@/lib/db";
import { Mustahik } from "@/types/Data";
// import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export const tambahData = async (data: Mustahik) => {
  try {
    await db.mustahik.create({
      data: {
        ...data,
      },
    });
    return {success: "Data berhasil ditambah"}
  } catch (e) {
    throw new Error((e as Error).message)
  }
};
 