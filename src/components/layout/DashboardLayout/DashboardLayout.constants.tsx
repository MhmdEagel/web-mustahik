import { LogOut, Settings, Table } from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    items: [
      {
        key: "dashboard-item-1",
        label: "Data",
        href: "/dashboard",
        icon: <Table size={18} />,
      },
      {
        key: "dashboard-item-2",
        label: "Pengaturan",
        href: "/dashboard/pengaturan",
        icon: <Settings size={18} />,
      },
    ],
  },
  {
    title: "Akun",
    items: [
      {
        key: "account-item-3",
        label: "Log Out",
        icon: <LogOut size={18} />,
      },
    ],
  },
];

export { SIDEBAR_ITEMS };
