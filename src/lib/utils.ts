import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { Metadata } from "next";
import { MetaHeader } from "@/types/Metadata";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAlamatString(
  kotaKabupaten: string,
  kecamatan: string,
  kelurahan: string,
  namaJalan: string
) {
  return `${namaJalan}, Kec. ${kelurahan}, Kel. ${kecamatan}, ${kotaKabupaten}`;
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

export function generateStatusString( status: string) {
  const result = status.split("_").join(" ")
  return result
}


export const createMetadata = ({
  title,
}: MetaHeader): Metadata => ({
  title,
});

export function searchParamsToObject(params: Record<string, string | undefined>) {
  const obj: Record<string, any> = {};
  for (const key in params) {
    if (params[key]) {
      obj[key] = params[key];
    }
  }
  return obj;
}