import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: [
    {
      path: "../fonts/JetBrainsMonoNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMonoNerdFontMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMonoNerdFontMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio | Harry Greentree",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="macchiato">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
