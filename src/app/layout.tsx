import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MoblileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Morent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl mx-auto bg-slate-100">
      <Navbar/>
      <MoblileNavbar/>
        {children}
        <Footer/>
        </body>
  
    </html>
  );
}
