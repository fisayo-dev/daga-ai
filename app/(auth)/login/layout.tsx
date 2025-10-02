import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daga AI - Login",
  description: "Log in to your general AI-chat bot",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>; // Just passes through—no sidebar
}