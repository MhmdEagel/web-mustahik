import { IsOwned } from "@prisma/client";

interface Mustahik {
  id?: string;
  NIK: string;
  nama: string;
  nomor_telepon: string;
  alamat: string;
  jenis_bantuan: string;
  jumlah_bantuan: number;
  tanggal: Date;
  nama_penerima_laporan: string;
  status: string;
  golongan: string;
  memiliki_tanah_sawah_warung_bengkel: IsOwned;
  memiliki_perhiasan: IsOwned;
  memiliki_kulkas_tv_lcd: IsOwned;
  memiliki_tabung_gas_3kg: IsOwned;
  memiliki_hp_laptop: IsOwned;
  memiliki_kendaraan_bermotor: IsOwned;
  memiliki_tabungan: IsOwned;
}
export type { Mustahik };
