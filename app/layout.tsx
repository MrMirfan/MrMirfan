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
        <header className="m-2 md:rounded-full p-2 md:p-0 bg-black text-white flex flex-col md:flex-row items-center">
          <a href="./docs/Mohammed_Irfan_Resume.pdf" className="inline-flex w-9/12 m-3 px-5 italic text-3xl justify-center md:justify-normal hover:bg-slate-200 hover:rounded-full hover:text-black ">
            MrMI
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </a>
          <div className="flex flex-col md:flex-row gap-3 my-3 md:my-0">
            <Link href="." className="hover:px-5 hover:bg-slate-200 hover:rounded-full hover:text-black hover:text-lg hover:after:content-['🏡']">Home</Link>
            <Link href="about" className="hover:px-5 hover:bg-slate-200 hover:rounded-full hover:text-black hover:text-lg hover:after:content-['😁']">About</Link>
          </div>
        </header>

        {children}
      
      </body>
    </html>
  );
}
