import { NavBar, SideBar } from "@/components/index";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frame Journey | Photo Album",
  description: "A Photo Album app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="flex">
          <SideBar />
          <div className="w-full px-7 pt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
