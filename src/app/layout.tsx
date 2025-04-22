// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic", "latin-ext"] });

export const metadata: Metadata = {
  title: "CCS.AZ - İstilik və səs izolyasiyası",
  description:
    "İstilik və səs izolyasiyası üçün peşəkar həllər. Tikinti materiallarının satışı.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
