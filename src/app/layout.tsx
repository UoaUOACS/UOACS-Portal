import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { url } from "inspector";

import { ReactLenis } from "../libs/react-lenis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HelveticaNowDisplay = localFont({
  variable: "--font-helvetica-now-display",
  src: [
    {
      path: "./fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "uoacs",
  description: "University of Auckland Computer Science Society",
  icons: { icon: "assets/images/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${HelveticaNowDisplay.className} antialiased`}>
        {/* <ReactLenis root>{children}</ReactLenis> */}
        {children}
      </body>
    </html>
  );
}
