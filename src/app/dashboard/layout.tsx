"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import { Sidebar } from "@/components/organisms/Sidebar";
import { useAuth } from "@/context/AuthContext";
import { PrivateRoute } from "@/components/guards/RouteGuards";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <PrivateRoute>
      <div className="h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-purple-300 bg-white">
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

            <div className="relative">
              <NotificationsNoneIcon
                className="text-black/70"
                fontSize="medium"
              />
              <span className="absolute top-0 right-0 block w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-800">
                  {user?.name || "Unknown User"}
                </span>
                <span className="text-xs font-light text-gray-400 flex justify-end">
                  {user?.role || "User"}
                </span>
              </div>
              <Image
                src="https://res.cloudinary.com/dqcyabvc2/image/upload/v1723395384/circle-app/circleapp-1723395381902.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <button
                onClick={handleLogout}
                className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogoutIcon fontSize="small" className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar + Content */}
        <div className="flex min-h-screen">
          <aside className="flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 max-h-screen overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}
