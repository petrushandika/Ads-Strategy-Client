"use client";

import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  trend: "up" | "down";
  percent: string;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  trend,
  percent,
  icon,
  color,
}) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
        {icon}
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
        {trend === "up" ? (
          <ArrowUpwardIcon fontSize="small" className="text-green-500" />
        ) : (
          <ArrowDownwardIcon fontSize="small" className="text-red-500" />
        )}
        <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
          {percent}
        </span>
      </div>
    </div>
  </div>
);

const AdsMetrics: React.FC = () => {
  const metrics: MetricCardProps[] = [
    {
      title: "CPM",
      value: "Rp 28.000",
      description: "Cost per 1,000 impressions",
      trend: "up",
      percent: "+3.2%",
      icon: <BarChartIcon />,
      color: "green",
    },
    {
      title: "CPC",
      value: "Rp 3.500",
      description: "Avg cost per click",
      trend: "down",
      percent: "-1.5%",
      icon: <TimelineIcon />,
      color: "blue",
    },
    {
      title: "CTR",
      value: "2.8%",
      description: "Click-through rate",
      trend: "up",
      percent: "+0.9%",
      icon: <ShowChartIcon />,
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} {...metric} />
      ))}
    </div>
  );
};

export default AdsMetrics;
