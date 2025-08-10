import { db } from "@/lib/db";

export const getMustahikData = async () => {
  const res = await db.mustahik.findMany({
    omit: {
      jumlah_bantuan: true,
      nama_penerima_laporan: true,
      jenis_bantuan: true,
    },
  });

  return res;
};

export const getMustahikDataById = async (mustahikId: string, isOmitId = false) => {
  const res = await db.mustahik.findUnique({
    where: {
      id: mustahikId
    },
    omit: {
      id: isOmitId
    }
  })
  return res
}
