import { AtomIcon, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { Input } from "./ui/input"

// Fake AI chat prompts
const chatItems = [
  {
    title: "Explain quantum computing",
    url: "#",
    preview: "Can you explain quantum computing in simple terms?",
  },
  {
    title: "Write a Python function",
    url: "#",
    preview: "Help me write a function to sort an array",
  },
  {
    title: "Marketing strategy ideas",
    url: "#",
    preview: "What are some effective marketing strategies for...",
  },
  {
    title: "Debug my React code",
    url: "#",
    preview: "I'm getting an error in my useEffect hook",
  },
  {
    title: "Recipe suggestions",
    url: "#",
    preview: "What can I make with chicken and vegetables?",
  },
  {
    title: "Learn TypeScript basics",
    url: "#",
    preview: "What are the key differences between TS and JS?",
  },
  {
    title: "SQL query optimization",
    url: "#",
    preview: "How can I optimize this database query?",
  },
  {
    title: "Creative writing prompt",
    url: "#",
    preview: "Write a short story about a time traveler",
  },
  {
    title: "CSS flexbox help",
    url: "#",
    preview: "How do I center a div using flexbox?",
  },
  {
    title: "Business plan outline",
    url: "#",
    preview: "Help me create a business plan for a startup",
  },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <div className="p-4 flex justify-between items-center border-b border-border">
            <div className="flex items-center gap-2">
                <AtomIcon className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Daga AI</h2>
            </div>
            <SidebarTrigger size="default"/>
        </div>
        <div className="mx-4 mt-4 border border-border rounded-xl p-2 flex items-center gap-2 bg-muted/50">
            <Search className="h-5 w-5 text-muted-foreground"/>
            <Input 
              placeholder="Search chats..." 
              className="h-full p-0 bg-transparent w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground" 
            />
        </div>
        <SidebarGroup className="px-4 py-4 flex-1 overflow-hidden">
            <SidebarGroupContent className="h-full overflow-y-auto custom-scrollbar">
                <SidebarMenu className="space-y-1">
                {chatItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          size={null} 
                          className="p-3 rounded-xl hover:bg-muted transition-colors group"
                        >
                            <Link href={item.url} className="flex flex-col items-start gap-1">
                                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-xs text-muted-foreground line-clamp-1">
                                  {item.preview}
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar