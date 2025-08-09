import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAlamatString(
  kotaKabupaten: string,
  kecamatan: string,
  kelurahan: string,
  namaJalan: string
) {
  return `${namaJalan} Kel. ${kelurahan} Kec. ${kecamatan} ${kotaKabupaten}`
}


