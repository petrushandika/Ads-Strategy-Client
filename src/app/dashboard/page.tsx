"use client";

import React from "react";
import DashboardCard, { DashboardCardProps } from "@/components/DashboardCard";
import ChartActivity from "@/components/ChartActivity";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PercentIcon from "@mui/icons-material/Percent";
import SidebarCard from "@/components/SidebarCard";
import AdsMetrics from "@/components/AdsMetrics";

const cardData: DashboardCardProps[] = [
  {
    title: "Total Ads Spend",
    value: "Rp 120jt",
    percent: "+12%",
    description: "since last month",
    icon: <AttachMoneyIcon fontSize="medium" className="text-white" />,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Total Revenue",
    value: "Rp 360jt",
    percent: "+18%",
    description: "since last week",
    icon: <TrendingUpIcon fontSize="medium" className="text-white" />,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Average ROAS",
    value: "3.6x",
    percent: "+7%",
    description: "since last week",
    icon: <ShowChartIcon fontSize="medium" className="text-white" />,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Conversion Rate",
    value: "4.2%",
    percent: "+5%",
    description: "since last month",
    icon: <PercentIcon fontSize="medium" className="text-white" />,
    gradient: "from-pink-400 to-pink-600",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 mb-20">
      <h1 className="text-black text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cardData.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3">
          <ChartActivity />
        </div>

        <div className="lg:row-span-2 mt-5">
          <SidebarCard />
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
          <AdsMetrics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
