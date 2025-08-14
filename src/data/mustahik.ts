import { db } from "@/lib/db";
import { Filters } from "@/types/Filters";

export const getMustahikData = async (filters?: Filters) => {
  const res = await db.mustahik.findMany({
    where: filters
      ? {
          NIK: { contains: filters.NIK ?? undefined },
          alamat: { contains: filters.alamat ?? undefined },
          jenis_bantuan: { contains: filters.jenis_bantuan ?? undefined },
          nama: { contains: filters.nama ?? undefined },
          nomor_telepon: { contains: filters.nomor_telepon ?? undefined },
          tanggal: filters.tanggal ?? undefined ,
          status: { contains: filters.status ?? undefined },
          nama_penerima_laporan: {
            contains: filters.nama_penerima_laporan ?? undefined,
          },
        }
      : {},
    omit: {
      jumlah_bantuan: true,
      nama_penerima_laporan: true,
      jenis_bantuan: true,
    },
  });

  return res;
};

export const getMustahikDataById = async (
  mustahikId: string,
  isOmitId = false
) => {
  const res = await db.mustahik.findUnique({
    where: {
      id: mustahikId,
    },
    omit: {
      id: isOmitId,
    },
  });
  return res;
};
