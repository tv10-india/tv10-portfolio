import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-primary',
  weight: ['300', '400', '600'] 
});

export const metadata: Metadata = {
  title: "TV10 India - Media Network Agency",
  description: "A full-service media network delivering strategy, creativity, and impactful results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </head>
      <body className={`${poppins.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}