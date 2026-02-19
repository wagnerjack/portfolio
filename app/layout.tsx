import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack Wagner — Software Engineer",
  description:
    "Jack Wagner is a Software Engineer at Bloomberg LP specializing in internationalization, localization, and translation infrastructure.",
  openGraph: {
    title: "Jack Wagner — Software Engineer",
    description:
      "Software Engineer at Bloomberg LP. Building i18n, l10n, and t9n infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
