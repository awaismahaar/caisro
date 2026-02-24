import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const rockabilly = localFont({
  src: "../public/fonts/Rockabilly.ttf",
  variable: "--font-rockabilly",
});
const sansita_one = localFont({
  src: "../public/fonts/SansitaOne.ttf",
  variable: "--font-sansita-one",
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Caisro",
  description: "Caisro is a web application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rockabilly.variable} ${sansita_one.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
