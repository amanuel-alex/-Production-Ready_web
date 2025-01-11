import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "production ready",
  description: "ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <SessionProvider>
          <Navbar />
          {children}
          <FooterPage />
        </SessionProvider>
      </body>
    </html>
  );
}
