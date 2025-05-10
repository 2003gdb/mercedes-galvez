import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mercedes Galvez",
  description: "Terapias electromagnticas",
  keywords: "Sesiones Akryonitas, Rejillas canalizadas, Arte canalizado, Terapia electromagnetica, Terapia cuantica, Terapia electromagnetica, ",
  icons: {
    icon: "/cuarzo-rosa.png"
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
