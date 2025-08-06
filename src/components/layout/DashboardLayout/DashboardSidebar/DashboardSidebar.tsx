"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarItems } from "@/types/Dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";




interface PropTypes {
  sidebarItems?: SidebarItems[];
}

export default function DashboardSidebar(props: PropTypes) {
  const { sidebarItems } = props;
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="mb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div>
                <span className="text-lg font-semibold text-primary">
                  Admin IZI
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems?.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <div className="font-medium text-[#1C1C1C]/70">
                    {item.title}
                  </div>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.key}>
                        <SidebarMenuSubButton asChild >
                          <Link href={`${item.href}`}>
                          {item.icon}
                          {item.label}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  );
}
