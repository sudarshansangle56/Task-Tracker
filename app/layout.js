import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DO LIST",
  description: "Basic app of to do list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[60px] w-full flex items-center justify-between text-[23px] bg-black text-white">
          <h2 className="ml-3">Task Tracker</h2>
          <p className="text-[15px] mr-4">This Site Still In development</p>
        </div>
        {children}
      </body>
    </html>
  );
}
