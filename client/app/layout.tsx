import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Dheeraj Sonekar | Full Stack Developer Portfolio",
  description: "Portfolio of Dheeraj Sonekar – MERN stack developer with experience in SQL, MongoDB, and scalable systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
