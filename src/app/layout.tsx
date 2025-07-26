import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";

import "./global.scss";

export const metadata: Metadata = {
  title: "Nuestra boda | Ingrid y Mauricio",
};

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-fair-display",
});

const swagume = localFont({
  src: "../assets/fonts/Swagume.otf",
  variable: "--font-swagume",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(playfairDisplay.className, swagume.className)}
    >
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
