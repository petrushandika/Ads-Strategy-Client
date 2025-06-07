"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type ChartData = {
  week: {
    name: string;
    adsSpend: number;
    revenue: number;
    conversion: number;
    roas: number;
  }[];
  month: {
    name: string;
    adsSpend: number;
    revenue: number;
    conversion: number;
    roas: number;
  }[];
  day: {
    name: string;
    adsSpend: number;
    revenue: number;
    conversion: number;
    roas: number;
  }[];
};

const chartData: ChartData = {
  week: [
    {
      name: "Week 1",
      adsSpend: 4000,
      revenue: 2400,
      conversion: 2400,
      roas: 3.6,
    },
    {
      name: "Week 2",
      adsSpend: 3000,
      revenue: 1398,
      conversion: 2210,
      roas: 2.8,
    },
    {
      name: "Week 3",
      adsSpend: 2000,
      revenue: 9800,
      conversion: 2290,
      roas: 4.1,
    },
    {
      name: "Week 4",
      adsSpend: 2780,
      revenue: 3908,
      conversion: 2000,
      roas: 3.2,
    },
  ],
  month: [
    {
      name: "January",
      adsSpend: 12000,
      revenue: 8400,
      conversion: 6800,
      roas: 3.5,
    },
    {
      name: "February",
      adsSpend: 9800,
      revenue: 7000,
      conversion: 5900,
      roas: 3.4,
    },
    {
      name: "March",
      adsSpend: 11000,
      revenue: 7700,
      conversion: 6200,
      roas: 3.1,
    },
    {
      name: "April",
      adsSpend: 12000,
      revenue: 9000,
      conversion: 7400,
      roas: 3.8,
    },
  ],
  day: [
    {
      name: "Monday",
      adsSpend: 500,
      revenue: 350,
      conversion: 230,
      roas: 3.2,
    },
    {
      name: "Tuesday",
      adsSpend: 600,
      revenue: 500,
      conversion: 300,
      roas: 2.8,
    },
    {
      name: "Wednesday",
      adsSpend: 450,
      revenue: 400,
      conversion: 270,
      roas: 3.0,
    },
    {
      name: "Thursday",
      adsSpend: 700,
      revenue: 650,
      conversion: 350,
      roas: 3.4,
    },
    {
      name: "Friday",
      adsSpend: 800,
      revenue: 700,
      conversion: 400,
      roas: 3.6,
    },
    {
      name: "Saturday",
      adsSpend: 750,
      revenue: 680,
      conversion: 380,
      roas: 3.5,
    },
    {
      name: "Sunday",
      adsSpend: 900,
      revenue: 850,
      conversion: 450,
      roas: 3.8,
    },
  ],
};

const ChartActivity: React.FC = () => {
  const [lines, setLines] = useState([
    {
      key: "adsSpend",
      label: "Ads Spend",
      color: "url(#adsSpendGradient)",
      active: true,
    },
    {
      key: "revenue",
      label: "Revenue",
      color: "url(#revenueGradient)",
      active: true,
    },
    {
      key: "roas",
      label: "ROAS",
      color: "url(#roasGradient)",
      active: true,
    },
    {
      key: "conversion",
      label: "Conversion",
      color: "url(#conversionGradient)",
      active: true,
    },
  ]);

  const [timePeriod, setTimePeriod] = useState<"week" | "month" | "day">(
    "week"
  );
  const [data, setData] = useState(chartData.week);

  const toggleLine = (key: string) => {
    setLines((prev) =>
      prev.map((line) =>
        line.key === key ? { ...line, active: !line.active } : line
      )
    );
  };

  const handleTimePeriodChange = (event: SelectChangeEvent<string>) => {
    const selectedPeriod = event.target.value as "week" | "month" | "day";
    setTimePeriod(selectedPeriod);
    setData(chartData[selectedPeriod]);
  };

  // Function to get the color of the gradient for text
  const getGradientTextColor = (key: string) => {
    switch (key) {
      case "adsSpend":
        return "rgb(34, 197, 94)";
      case "revenue":
        return "rgb(59, 130, 246)";
      case "roas":
        return "rgb(255, 159, 10)";
      case "conversion":
        return "rgb(244, 114, 182)";
      default:
        return "#000";
    }
  };

  // Custom Legend for displaying labels with circle and black text color
  const renderCustomLegend = (props: any) => {
    const { payload } = props;

    return (
      <div className="flex justify-center gap-4 my-3">
        {payload.map((entry: any) => {
          const line = lines.find((line) => line.key === entry.dataKey);
          const dotColor = getGradientTextColor(entry.dataKey);

          return (
            <div
              key={entry.dataKey}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleLine(entry.dataKey)}
            >
              {/* Dot */}
              <div
                style={{
                  backgroundColor: dotColor,
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                }}
              />
              {/* Label */}
              <span className="text-sm capitalize text-black">
                {line?.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h3 className="text-black text-base font-semibold">Chart Activity</h3>
        </div>

        {/* Line Switch Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          {lines.map((line) => (
            <FormControlLabel
              key={line.key}
              control={
                <Switch
                  checked={line.active}
                  onChange={() => toggleLine(line.key)}
                  color="primary"
                />
              }
              label={
                <span className="text-sm capitalize text-gray-800">
                  {line.label}
                </span>
              }
            />
          ))}
        </div>

        {/* Dropdown */}
        <Select
          value={timePeriod}
          onChange={handleTimePeriodChange}
          displayEmpty
          className="text-sm border-none hover:border-none rounded-lg h-10"
        >
          <MenuItem value="day">Per Day</MenuItem>
          <MenuItem value="week">Per Week</MenuItem>
          <MenuItem value="month">Per Month</MenuItem>
        </Select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip />
          {/* Custom Legend with margin */}
          <Legend content={renderCustomLegend} />
          <defs>
            <linearGradient
              id="adsSpendGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" />
            </linearGradient>
            <linearGradient
              id="revenueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(37, 99, 235)" />
            </linearGradient>
            <linearGradient
              id="roasGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(255, 159, 10)" />
              <stop offset="100%" stopColor="rgb(255, 93, 18)" />
            </linearGradient>
            <linearGradient
              id="conversionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(244, 114, 182)" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" />
            </linearGradient>
          </defs>
          {lines.map(
            (line) =>
              line.active && (
                <Line
                  key={line.key}
                  type="monotone"
                  dataKey={line.key}
                  stroke={line.color}
                  strokeWidth={3}
                  dot={false}
                />
              )
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartActivity;
