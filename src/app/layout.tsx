import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Sidebar } from "@/components/organisms/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          poppins.variable,
          "bg-white text-[#2C3E50] antialiased font-sans"
        )}
      >
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-purple-300 bg-white">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-purple-500 text-white font-bold px-2 py-1 rounded text-lg">
              Ads
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-gray-900">
                Strategy
              </span>
              <span className="text-xs text-gray-500">Systems</span>
            </div>
          </div>

          {/* Search and Profile */}
          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here..."
                className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <SearchRoundedIcon
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                fontSize="small"
              />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-800">
                  Petrus Handika
                </span>
                <span className="text-xs font-light text-gray-400 flex justify-end">
                  Admin
                </span>
              </div>
              <Image
                src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869139.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded"
              />
            </div>
          </div>
        </header>

        {/* Sidebar + Content */}
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-h-screen p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
