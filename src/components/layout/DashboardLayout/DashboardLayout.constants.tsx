import { LogOut, Settings, Table } from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    items: [
      {
        key: "dashboard-item-1",
        label: "Data",
        href: "/dashboard",
        icon: <Table />,
      },
      {
        key: "dashboard-item-2",
        label: "Pengaturan",
        href: "/dashboard/pengaturan",
        icon: <Settings />,
      },
    ],
  },
  {
    title: "Akun",
    items: [
      {
        key: "account-item-3",
        label: "Log Out",
        icon: <LogOut />,
      },
    ],
  },
];

export { SIDEBAR_ITEMS };
