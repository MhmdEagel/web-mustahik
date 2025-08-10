"use client";

import { deleteData } from "@/actions/delete-data";
import { Button } from "@/components/ui/button";
import { cn, generateDateString, generateStatusString } from "@/lib/utils";
import { Mustahik } from "@/types/Data";
import { ColumnDef } from "@tanstack/react-table";
import { ExternalLink, Pen, Trash } from "lucide-react";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn/DeleteBtn";

type MustahikTable = Omit<
  Mustahik,
  "jumlah_bantuan" | "nama_penerima_laporan" | "jenis_bantuan"
>;
export const columns: ColumnDef<MustahikTable>[] = [
  {
    accessorKey: "NIK",
    header: "NIK",
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "nomor_telepon",
    header: "Nomor Telepon",
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
    cell: ({ row }) => {
      return (
        <div className="whitespace-normal mx-auto w-[120px] text-center">
          {row.getValue("alamat")}
        </div>
      );
    },
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal",
    cell: ({ row }) => {
      const dateRow = row.getValue("tanggal") as Date;
      const formatted = generateDateString(dateRow);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusData = row.getValue("status") as string;
      const statusString = generateStatusString(statusData);
      return (
        <div
          className={cn(
            "border rounded-lg border-foreground text-foreground px-3 py-1 capitalize",
            {
              "border-red-700 text-red-700":
                statusData === "belum_terverifikasi",
            }
          )}
        >
          {statusString}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="space-x-2 flex">
          <DeleteBtn mustahikId={id} />
          <Link href={`/dashboard/edit-data/${id}`}>
            <Button
              className="bg-[#157145] hover:bg-[#157145]/70"
              size={"icon"}
            >
              <Pen />
            </Button>
          </Link>
          <Link href={`/dashboard/detail-data/${id}`}>
            <Button
              className="bg-[#157145] hover:bg-[#157145]/70"
              size={"icon"}
            >
              <ExternalLink />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
