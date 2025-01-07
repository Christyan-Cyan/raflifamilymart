import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const fontMontserrat = Montserrat ({
  subsets: ["latin"],
  display: "swap",
})

export const fontInter = Inter ({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Rafli.FamilyMart",
  description: "Kemudahan Belanja, Kenyamanan Keluarga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.className} transition scroll-smooth duration-300`}>
        <Header secondaryFont={`${fontInter.className}`} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
