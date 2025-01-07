import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="font-work-sans">{children}</main>
      <Footer />
    </>
  );
}
