import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "900"]
});

const montserrat = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Goutham's Portfolio",
  description: "This is a website to showcase goutham's profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
