import { Geist, Geist_Mono, Lexend_Mega, Lexend_Deca} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendMega = Lexend_Mega({
  variable: "--font-lexend-mega",
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  display: "swap",
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
        className={`${geistSans.variable} ${geistMono.variable} ${lexendMega.variable} ${lexendDeca.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
