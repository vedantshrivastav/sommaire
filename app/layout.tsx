import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight : ['200','300','400','500','600','700','800','900'],

});

export const metadata: Metadata = {
  title: "Sommaire",
  description: "Sommaire is an app for summarizing pdf documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
