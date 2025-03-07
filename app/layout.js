"use client"; // 🔴 Warning: metadata export won't work!

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [nav, setNav] = useState(true); // ✅ Now `useState` works

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar nav={nav} setNav={setNav} />
        <div className="flex">
          <Sidebar nav={nav} />
          {children}
        </div>
      </body>
    </html>
  );
}
