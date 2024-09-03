import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Kishor Upla's Portfolio",
    description:
      "Explore the portfolio of Dr. Kishor Upla, an Assistant Professor at SVNIT Surat, specializing in image processing, computer vision, and machine learning. Discover his research, publications, and professional achievements.",
    url: "https://sites.google.com/site/kpupla",
    images: [
      {
        url: "URL_to_image",
        width: 800,
        height: 600,
        alt: "Kishor Upla's Portfolio Image",
      },
    ],
    siteName: "Kishor Upla's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishor Upla's Portfolio",
    description:
      "Explore the portfolio of Dr. Kishor Upla, an Assistant Professor at SVNIT Surat, specializing in image processing, computer vision, and machine learning. Discover his research, publications, and professional achievements.",
    images: ["URL_to_image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
