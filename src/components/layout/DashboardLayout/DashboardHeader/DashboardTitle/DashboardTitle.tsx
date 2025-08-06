"use client";

import { usePathname } from "next/navigation";
import { DASHBOARD_TITLE } from "./DashboardTitle.constant";


export default function DashboardTitle() {
  const pathName = usePathname();
  const url = `/${pathName.split("/").filter(Boolean).slice(0, 2).join("/")}`;
  const dashboard_title = DASHBOARD_TITLE.find((item) => url === item.path);

  return <h1 className="text-base font-medium">{dashboard_title?.title}</h1>;
}
