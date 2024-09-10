import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      path: './fonts/HelveticaNowDisplay-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNowDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "UOACS",
  description: "University of Auckland Computer Science Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${HelveticaNowDisplay.className} antialiased`}>{children}</body>
    </html>
  );
}
