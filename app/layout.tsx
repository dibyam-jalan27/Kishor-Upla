import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/Sidebar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishor Upla's Portfolio",
  description:
    "Explore the portfolio of Dr. Kishor Upla, an Assistant Professor at SVNIT Surat, specializing in image processing, computer vision, and machine learning. Discover his research, publications, and professional achievements.",
  keywords: [
    "Kishor Upla",
    "Assistant Professor",
    "SVNIT Surat",
    "Image Processing",
    "Computer Vision",
    "Machine Learning",
    "Multi-resolution Image Fusion",
    "Research",
    "Publications",
    "IEEE",
    "ERCIM Fellowship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
