import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jersey Shore Window Tinting | Residential & Commercial Window Film",
  description:
    "Your source for residential home window tinting at the Jersey Shore. Quality window film installations with Vista, Llumar, Avery, and 3M Decorative films.",
  keywords: [
    "window tinting",
    "Jersey Shore",
    "Sea Isle City",
    "residential window film",
    "UV protection",
    "decorative film",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
