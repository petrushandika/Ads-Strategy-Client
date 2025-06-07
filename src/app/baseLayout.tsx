"use client";

import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Sidebar } from "@/components/organisms/Sidebar";
import { useAuth } from "@/context/AuthContext";
import { PublicRoute } from "@/components/guards/RouteGuards";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDropdownOpen = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseDropdown();
  };

  return (
    <PublicRoute>
      <div className="h-screen overflow-hidden flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-purple-300 bg-white z-10">
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

            {/* Profile with Dropdown Trigger */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleProfileClick}
            >
              <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-800">
                  {user?.name || "Unknown User"}
                </span>
                <span className="text-xs font-light text-gray-400 text-right">
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
            </div>
          </div>
        </header>

        {/* Dropdown Menu */}
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={isDropdownOpen}
          onClose={handleCloseDropdown}
          TransitionProps={{
            timeout: 250,
          }}
          PaperProps={{
            elevation: 5,
            sx: {
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              minWidth: 200,
              marginTop: 2.5,
              "& .MuiMenuItem-root": {
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" color="action" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemIcon>
              <LockIcon fontSize="small" color="action" />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" color="action" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </MenuItem>
        </Menu>

        {/* Sidebar + Content */}
        <div className="flex flex-1 overflow-hidden">
          <aside className="flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 max-h-screen overflow-y-auto p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </PublicRoute>
  );
}
