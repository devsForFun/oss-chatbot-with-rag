"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function ChatSidebar() {
  return (

    <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
    </SidebarProvider>
  )
}