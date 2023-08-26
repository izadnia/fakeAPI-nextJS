import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import NavAdressbar from "./components/nav/NavAdressbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeAPI with NEXT",
  description: "Generated by create next app",
  colorScheme:"light",
  themeColor:"#E2E8F0",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div>
            <NavBar />
          </div>
          <div>
          <NavAdressbar />
        </div>
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}