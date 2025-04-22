"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PieChartOutlineRoundedIcon from "@mui/icons-material/PieChartOutlineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const SidebarLink = ({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}) => (
  <Link
    href={href}
    className={clsx(
      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
      active ? "bg-purple-500 text-white" : "text-gray-600 hover:bg-purple-100"
    )}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export const Sidebar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<"ads" | "social" | null>(
    null
  );

  const toggleDropdown = (menu: "ads" | "social") => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <aside className="w-64 min-h-screen bg-white text-gray-600 border-r border-purple-300 p-5">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 space-y-1 text-sm">
          <SidebarLink
            href="/dashboard"
            label="Dashboard"
            icon={<DashboardRoundedIcon fontSize="small" />}
            active={pathname === "/dashboard"}
          />

          {/* Ads Performance */}
          <button
            onClick={() => toggleDropdown("ads")}
            className="flex items-center justify-between px-3 py-2 w-full rounded-lg hover:bg-purple-100 transition"
          >
            <div className="flex items-center gap-3">
              <PieChartOutlineRoundedIcon fontSize="small" />
              <span className="text-sm font-medium text-gray-600">
                Ads Performance
              </span>
            </div>
            <ExpandMoreRoundedIcon
              fontSize="small"
              className={clsx(
                "transition-transform duration-200",
                openDropdown === "ads" && "rotate-180"
              )}
            />
          </button>
          {openDropdown === "ads" && (
            <div className="ml-8 space-y-1">
              <SidebarLink
                href="/ads-performance/click-through-rate"
                label="Click Through Rate"
                icon={<TrendingUpRoundedIcon fontSize="small" />}
                active={pathname === "/ads-performance/click-through-rate"}
              />
              <SidebarLink
                href="/ads-performance/conversion-rates"
                label="Conversion Rates"
                icon={<SwapHorizRoundedIcon fontSize="small" />}
                active={pathname === "/ads-performance/conversion-rates"}
              />
              <SidebarLink
                href="/ads-performance/return-on-ad-spend"
                label="ROAS"
                icon={<PercentRoundedIcon fontSize="small" />}
                active={pathname === "/ads-performance/return-on-ad-spend"}
              />
            </div>
          )}

          <SidebarLink
            href="/ads-analytics"
            label="Ads Analytics"
            icon={<BarChartRoundedIcon fontSize="small" />}
            active={pathname === "/ads-analytics"}
          />

          <SidebarLink
            href="/ads-schedule"
            label="Ads Schedule"
            icon={<CalendarTodayRoundedIcon fontSize="small" />}
            active={pathname === "/ads-schedule"}
          />

          <SidebarLink
            href="/ads-planner"
            label="Ads Planner"
            icon={<CampaignRoundedIcon fontSize="small" />}
            active={pathname === "/ads-planner"}
          />

          {/* Social Media Metrics */}
          <button
            onClick={() => toggleDropdown("social")}
            className="flex items-center justify-between px-3 py-2 w-full rounded-lg hover:bg-purple-100 transition"
          >
            <div className="flex items-center gap-3">
              <InsightsRoundedIcon fontSize="small" />
              <span className="text-sm font-medium text-gray-600">
                Social Media Metrics
              </span>
            </div>
            <ExpandMoreRoundedIcon
              fontSize="small"
              className={clsx(
                "transition-transform duration-200",
                openDropdown === "social" && "rotate-180"
              )}
            />
          </button>
          {openDropdown === "social" && (
            <div className="ml-8 space-y-1">
              <SidebarLink
                href="/social-media-metrics/platform-performance"
                label="Platform Performance"
                icon={<EqualizerRoundedIcon fontSize="small" />}
                active={
                  pathname === "/social-media-metrics/platform-performance"
                }
              />
              <SidebarLink
                href="/social-media-metrics/engagement-by-channel"
                label="Engagement By Channel"
                icon={<ChatBubbleOutlineRoundedIcon fontSize="small" />}
                active={
                  pathname === "/social-media-metrics/engagement-by-channel"
                }
              />
              <SidebarLink
                href="/social-media-metrics/influencer-impact"
                label="Influencer Impact"
                icon={<GroupsRoundedIcon fontSize="small" />}
                active={pathname === "/social-media-metrics/influencer-impact"}
              />
            </div>
          )}

          <SidebarLink
            href="/income"
            label="Income"
            icon={<MonetizationOnRoundedIcon fontSize="small" />}
            active={pathname === "/income"}
          />
          <SidebarLink
            href="/payment-billing"
            label="Payment Billing"
            icon={<CreditCardRoundedIcon fontSize="small" />}
            active={pathname === "/payment-billing"}
          />
          <SidebarLink
            href="/settings"
            label="Settings"
            icon={<SettingsRoundedIcon fontSize="small" />}
            active={pathname === "/settings"}
          />
        </div>

        {/* Logout */}
        <div className="mt-auto">
          <SidebarLink
            href="/logout"
            label="Logout"
            icon={<LogoutRoundedIcon fontSize="small" />}
            active={pathname === "/logout"}
          />
        </div>
      </div>
    </aside>
  );
};
