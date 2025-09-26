import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import SonnerProvider from "@/components/providers/sonner";

import "./global.scss";
import banner from "@/assets/images/photos/IMG_0040.jpg";

export const metadata: Metadata = {
  title: "Nuestra boda | Ingrid y Mauricio",
  description:
    "Con el corazón lleno de gratitud por todo lo compartido y el amor que nos une, queremos celebrar este momento especial contigo. Tu presencia lo hará aún más feliz.",
  openGraph: {
    title: "Nuestra boda | Ingrid y Mauricio",
    images: [banner.src],
    description:
      "Con el corazón lleno de gratitud por todo lo compartido y el amor que nos une, queremos celebrar este momento especial contigo. Tu presencia lo hará aún más feliz.",
  },
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
        <SonnerProvider>
          <CssBaseline />
          {children}
        </SonnerProvider>
      </body>
    </html>
  );
}
