import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Irfan",
  description: "I need a Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {/* Header */}
        <header className="bg-black h-14 text-white flex items-center">
          <Link href="." className="w-9/12 m-5 italic text-3xl ">MrMI</Link>
          <div>
            <Link href="about" className="overline decoration-double decoration-white">About</Link>
          </div>
        </header>

        {children}
      
      </body>
    </html>
  );
}
