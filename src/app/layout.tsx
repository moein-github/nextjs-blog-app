import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Best blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <ThemeContextProvider>
          <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-slate-900 dark:text-slate-100">
            <div className="max-w-[475px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-[1366px] mx-auto md:px-10 xl:px-20">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
