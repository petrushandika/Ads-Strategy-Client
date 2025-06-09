import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GuardLayout from "./guardLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ads Strategy Systems",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-white text-[#2C3E50] antialiased font-sans`}
      >
        <GuardLayout>{children}</GuardLayout>
      </body>
    </html>
  );
}
