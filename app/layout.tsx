import React from "react";
import "../styles/globals.css";
import public_sans from "@/fonts/publicSans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${public_sans.variable} antialiased`}>
      <body className="font-public-sans">{children}</body>
    </html>
  );
}
