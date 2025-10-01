import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import DagaSidebar  from "@/components/daga-sidebar"

export const metadata: Metadata = {
  title: "Daga AI",
  description: "Your genereal AI-chat bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <DagaSidebar />
              <main>
                {/* <SidebarTrigger /> */}
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
