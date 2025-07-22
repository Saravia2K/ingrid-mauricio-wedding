import { Metadata } from "next";
import { CssBaseline } from "@mui/material";

import "./global.scss";

export const metadata: Metadata = {
  title: "Nuestra boda | Ingrid y Mauricio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
