import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kesandung Rindu",
  description: "Description",
  icons: {
    icon: "/assets/logo-2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratFont.variable}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
