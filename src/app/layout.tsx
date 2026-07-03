import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hrescic | Creative and Strategy Agency",
  description: "We build brands, websites, content and video that work together as one system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter text-[#1F1F1F]`}>
        {children}
      </body>
    </html>
  );
}
