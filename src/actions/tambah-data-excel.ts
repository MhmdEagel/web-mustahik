"use server";

import { db } from "@/lib/db";
import { Mustahik } from "@/types/Data";

export const tambahDataExcel = async (data: Mustahik[]) => {


  try {
    await db.mustahik.createMany({
      data,
    });

    return { success: "Berhasil menambahkan data", error: null };
  } catch (e) {
    console.error((e as Error).message);
    return { success: null, error: "Terjadi kesalahan" };
  }
};
