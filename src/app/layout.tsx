import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vicgrace Labs",
  description: "A venture studio building AI and software for Africa's edge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
