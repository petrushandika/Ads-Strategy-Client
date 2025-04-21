import { Box, Typography } from "@mui/material";
import React from "react";

export type DashboardCardProps = {
  title: string;
  value: string;
  percent: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  percent,
  description,
  icon,
  gradient,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-r ${gradient} text-white rounded-2xl shadow-lg p-5`}
    >
      <Box className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 p-2 bg-white/20 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
          {percent} <span className="text-white/80">{description}</span>
        </div>
      </Box>
      <Typography variant="h5" className="mb-1 font-semibold">
        {value}
      </Typography>
      <Typography variant="body2" className="text-white/80">
        {title}
      </Typography>
    </div>
  );
};

export default DashboardCard;
