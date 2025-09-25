import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { Metadata } from "next";
import { MetaHeader } from "@/types/Metadata";
import * as XLSX from "xlsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAlamatString(
  kotaKabupaten: string,
  kecamatan: string,
  kelurahan: string,
  namaJalan: string
) {
  return `${namaJalan}, Kel. ${kelurahan}, Kec. ${kecamatan}, ${kotaKabupaten}`;
}

export const moneyFormatter = Intl.NumberFormat("id-ID", {
  currency: "IDR",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function generateDateString(date: Date) {
  const dateString = dayjs(date).format("DD/MM/YYYY");
  return dateString;
}

export function getAlamatObj(alamat: string) {
  const alamatList = alamat.split(",");
  const result = alamatList.map((item, index) => {
    if (index === 1) return item.trim().replace("Kec. ", "");
    if (index === 2) return item.trim().replace("Kel. ", "");
    return item.trim();
  });
  return result;
}

export function generateStatusString(status: string) {
  const result = status.split("_").join(" ");
  return result;
}

export const createMetadata = ({ title }: MetaHeader): Metadata => ({
  title,
});

export function searchParamsToObject(
  params: Record<string, string | undefined>
) {
  const obj: Record<string, any> = {};
  for (const key in params) {
    if (params[key]) {
      obj[key] = params[key];
    }
  }
  return obj;
}

export function getBiayaListrik(dayaListrik: string) {
  if (dayaListrik === "450_watt") {
    return 150000;
  } else if (dayaListrik === "900_watt") {
    return 300000;
  } else if (dayaListrik === "lebih_dari_900_watt") {
    return 600000;
  } else {
    return 0;
  }
}

export function getPrioritasBantuan(selisih: number) {
  if (selisih <= 500_000 && selisih >= -1_500_000) {
    return "prioritas_5";
  }
  if (selisih <= -1_500_001 && selisih >= -2_200_000) {
    return "prioritas_4";
  }
  if (selisih <= -2_200_001 && selisih >= -2_800_000) {
    return "prioritas_3";
  }
  if (selisih <= -2_800_001 && selisih >= -3_400_000) {
    return "prioritas_2";
  }
  if (selisih <= -3_400_001) {
    return "prioritas_1";
  }
  return null;
}

export function getPrioritasString(prioritas_value: string) {
  if (prioritas_value && prioritas_value !== "" && prioritas_value !== null) {
    return prioritas_value.split("_").join(" ");
  }
  return null;
}

export async function excelToJSON(file?: File) {
  if (!file) {
    return null;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const binaryString = e.target?.result as string;
    const workbook = XLSX.read(binaryString, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log("Converted JSON:", jsonData);
  };

  reader.readAsArrayBuffer(file);
}
