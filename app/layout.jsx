import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio",
  description: "Nabil Hossain Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
