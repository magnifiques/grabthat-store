import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grab That | See it, like it, Grab it",
  description: "See it, like it, Grab it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
