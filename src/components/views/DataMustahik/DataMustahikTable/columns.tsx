"use client";

import { deleteData } from "@/actions/delete-data";
import { Button } from "@/components/ui/button";
import { cn, generateDateString, generateStatusString } from "@/lib/utils";
import { Mustahik } from "@/types/Data";
import { ColumnDef } from "@tanstack/react-table";
import { ExternalLink, Pen, Trash } from "lucide-react";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn/DeleteBtn";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type MustahikTable = Omit<
  Mustahik,
  "jumlah_bantuan" | "nama_penerima_laporan" | "jenis_bantuan"
>;
export const columns: ColumnDef<MustahikTable>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <div className="px-1">

        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
            "border rounded-lg border-foreground text-foreground p-1 capitalize",
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
        <Popover>
          <PopoverTrigger asChild>
            <Button size={"icon"} className="bg-foreground hover:bg-foreground/90">
              <ExternalLink />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-fit" >
            <div className="gap-4 flex flex-col">
              <DeleteBtn mustahikId={id} />
              <Link href={`/dashboard/edit-data/${id}`}>
                <Button
                variant={"ghost"}
                >
                  <Pen />
                  Edit
                </Button>
              </Link>
              <Link href={`/dashboard/detail-data/${id}`}>
                <Button
                  variant={"ghost"}
                >
                  <ExternalLink />
                  Detail
                </Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      );
    },
  },
];
