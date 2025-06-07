// features/auth/components/Animated.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { TrendingUp, ShowChart } from "@mui/icons-material";

interface StatsCard {
  id: number;
  title: string;
  value: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Animated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const statsCards: StatsCard[] = [
    {
      id: 1,
      title: "ENGAGEMENT",
      value: "+78,12%",
      subtitle: "last month",
      description:
        "This significant increase in engagement rate highlights the effectiveness of our recent strategic enhancement approach.",
      icon: <ShowChart className="w-8 h-8 text-white" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "TOTAL SALES",
      value: "$527.8K",
      subtitle: "last month",
      description:
        "This amount of total sales highlights the effectiveness of our recent strategies and constant approach.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "from-emerald-400 to-teal-400",
    },
    {
      id: 3,
      title: "GROWTH RATE",
      value: "+42%",
      subtitle: "this quarter",
      description:
        "Exceptional growth rate showing the success of our marketing campaigns and user acquisition strategies.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "from-orange-400 to-amber-400",
    },
    {
      id: 4,
      title: "USER RETENTION",
      value: "89.5%",
      subtitle: "monthly average",
      description:
        "High retention rate demonstrates strong user satisfaction and product-market fit across our platform.",
      icon: <ShowChart className="w-8 h-8 text-white" />,
      color: "from-rose-400 to-pink-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statsCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [statsCards.length]);

  const generateChartBars = (cardId: number) => {
    const heights =
      cardId === 1 ? [40, 60, 50, 70, 55, 80] : [30, 45, 35, 55, 40, 65];
    return heights.map((height, index) => (
      <div
        key={index}
        className={`bg-white/30 rounded-sm animate-pulse`}
        style={{
          width: "12px",
          height: `${height}px`,
          animationDelay: `${index * 0.2}s`,
          animationDuration: "2s",
        }}
      />
    ));
  };

  return (
    <div className="relative h-full bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-32 left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "3s" }}
      />

      {/* Line chart decoration */}
      <div className="absolute top-16 left-16 w-80 h-32 opacity-20">
        <svg viewBox="0 0 300 100" className="w-full h-full">
          <path
            d="M0,80 Q75,20 150,40 T300,30"
            stroke="white"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <circle cx="75" cy="30" r="4" fill="white" className="animate-ping" />
          <circle
            cx="150"
            cy="40"
            r="4"
            fill="white"
            className="animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="225"
            cy="35"
            r="4"
            fill="white"
            className="animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      {/* Animated Cards Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-96 w-80">
          {statsCards.map((card, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % statsCards.length;
            const isPrev =
              index ===
              (currentIndex - 1 + statsCards.length) % statsCards.length;

            let translateY = 0;
            let opacity = 0;
            let scale = 0.8;
            let zIndex = 0;

            if (isActive) {
              translateY = 0;
              opacity = 1;
              scale = 1;
              zIndex = 3;
            } else if (isNext) {
              translateY = 120;
              opacity = 0.7;
              scale = 0.9;
              zIndex = 2;
            } else if (isPrev) {
              translateY = -120;
              opacity = 0.3;
              scale = 0.8;
              zIndex = 1;
            } else {
              translateY = index > currentIndex ? 240 : -240;
              opacity = 0;
              scale = 0.7;
              zIndex = 0;
            }

            return (
              <Card
                key={card.id}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                sx={{
                  background: `linear-gradient(135deg, ${
                    card.color.includes("blue")
                      ? "#60a5fa, #22d3ee"
                      : card.color.includes("emerald")
                      ? "#34d399, #2dd4bf"
                      : card.color.includes("orange")
                      ? "#fb923c, #fbbf24"
                      : "#fb7185, #f472b6"
                  })`,
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <CardContent className="p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm font-medium opacity-80 mb-1">
                        {card.title}
                      </p>
                      <h3 className="text-3xl font-bold mb-1">{card.value}</h3>
                      <p className="text-sm opacity-70">{card.subtitle}</p>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg">
                      {card.icon}
                    </div>
                  </div>

                  <p className="text-sm opacity-80 mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Chart visualization */}
                  <div className="flex items-end justify-between gap-1 h-16">
                    {generateChartBars(card.id)}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Animated;
