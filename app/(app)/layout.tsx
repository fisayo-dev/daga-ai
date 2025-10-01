import { SidebarProvider } from "@/components/ui/sidebar";
import DagaSidebar from "@/components/daga-sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DagaSidebar />
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  );
}