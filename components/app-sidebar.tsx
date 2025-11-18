import { Plus } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroupAction,
} from '@/components/ui/sidebar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronUp } from 'lucide-react';
import { User2 } from 'lucide-react';

// Sample projects.
const projects = [
  {
    name: 'Testing Chatbot',
    url: '#',
  },
  { name: 'Another chat', url: '#' },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible='offcanvas'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold">Chatbot</SidebarGroupLabel>
          <SidebarGroupAction title="New Chat">
            <Plus /> <span className="sr-only">New Chat</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name} className="group">
                  <div className="flex items-center w-full gap-2">
                    <SidebarMenuButton asChild isActive={false}>
                      <a href={project.url} className="flex-1">
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('delete', project.name);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive"
                      aria-label={`Delete ${project.name}`}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
