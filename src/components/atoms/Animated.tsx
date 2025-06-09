import React, { useEffect, useState } from "react";

interface StatsCard {
  id: number;
  title: string;
  value: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  shadowColor: string;
}

const TrendingUpIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const BarChartIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const DollarIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
);

const Animated: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const statsCards: StatsCard[] = [
    {
      id: 1,
      title: "ENGAGEMENT",
      value: "+78.12%",
      subtitle: "last month",
      description:
        "This significant increase in engagement rate highlights the effectiveness of our recent strategic enhancement approach.",
      icon: <BarChartIcon />,
      color: "from-blue-500 via-cyan-500 to-teal-400",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-400/20",
      shadowColor: "shadow-blue-500/25",
    },
    {
      id: 2,
      title: "TOTAL SALES",
      value: "$527.8K",
      subtitle: "last month",
      description:
        "This amount of total sales highlights the effectiveness of our recent strategies and constant approach.",
      icon: <DollarIcon />,
      color: "from-emerald-500 via-green-500 to-lime-400",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-lime-400/20",
      shadowColor: "shadow-emerald-500/25",
    },
    {
      id: 3,
      title: "GROWTH RATE",
      value: "+42%",
      subtitle: "this quarter",
      description:
        "Exceptional growth rate showing the success of our marketing campaigns and user acquisition strategies.",
      icon: <TrendingUpIcon />,
      color: "from-orange-500 via-amber-500 to-yellow-400",
      gradient:
        "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-400/20",
      shadowColor: "shadow-orange-500/25",
    },
    {
      id: 4,
      title: "USER RETENTION",
      value: "89.5%",
      subtitle: "monthly average",
      description:
        "High retention rate demonstrates strong user satisfaction and product-market fit across our platform.",
      icon: <UsersIcon />,
      color: "from-purple-500 via-pink-500 to-rose-400",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-400/20",
      shadowColor: "shadow-purple-500/25",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statsCards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [statsCards.length, isHovered]);

  const generateChartBars = (cardId: number) => {
    const baseHeights = [35, 55, 45, 65, 50, 75, 40, 60];
    const heights = baseHeights.map((h) => h + cardId * 5);

    return heights.map((height, index) => (
      <div
        key={index}
        className="relative bg-gradient-to-t from-white/40 to-white/80 rounded-sm transition-all duration-500 hover:scale-110"
        style={{
          width: "8px",
          height: `${height}px`,
          animationDelay: `${index * 0.15}s`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-t from-transparent to-white/60 rounded-sm animate-pulse"
          style={{
            height: `${Math.random() * 20 + 10}px`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        />
      </div>
    ));
  };

  const generateFloatingElements = () => {
    return [...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 3}s`,
        }}
      >
        {i % 4 === 0 ? (
          <div className="w-3 h-3 bg-white/40 rounded-full" />
        ) : i % 4 === 1 ? (
          <div className="w-2 h-2 bg-white/60 rotate-45 transform" />
        ) : i % 4 === 2 ? (
          <div className="w-1 h-8 bg-white/30 rounded-full" />
        ) : (
          <div className="w-4 h-1 bg-white/50 rounded-full" />
        )}
      </div>
    ));
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl animate-spin"
          style={{ animationDuration: "20s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Animated SVG Decorations */}
      <div className="absolute top-16 left-16 w-96 h-40 opacity-30">
        <svg viewBox="0 0 400 120" className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 Q100,20 200,50 T400,30"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,70 Q120,30 240,40 T400,50"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={i * 80 + 40}
              cy={40 + Math.sin(i) * 20}
              r="6"
              fill="url(#lineGradient)"
              className="animate-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Animated Cards Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[480px] w-96">
          {statsCards.map((card, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % statsCards.length;
            const isPrev =
              index ===
              (currentIndex - 1 + statsCards.length) % statsCards.length;

            let translateY = 0;
            let translateX = 0;
            let opacity = 0;
            let scale = 0.7;
            let zIndex = 0;
            let rotateY = 0;

            if (isActive) {
              translateY = 0;
              translateX = 0;
              opacity = 1;
              scale = 1;
              zIndex = 3;
              rotateY = 0;
            } else if (isNext) {
              translateY = 140;
              translateX = 20;
              opacity = 0.8;
              scale = 0.9;
              zIndex = 2;
              rotateY = -5;
            } else if (isPrev) {
              translateY = -140;
              translateX = -20;
              opacity = 0.6;
              scale = 0.85;
              zIndex = 1;
              rotateY = 5;
            } else {
              translateY = index > currentIndex ? 280 : -280;
              translateX = index > currentIndex ? 40 : -40;
              opacity = 0;
              scale = 0.6;
              zIndex = 0;
              rotateY = index > currentIndex ? -15 : 15;
            }

            return (
              <div
                key={card.id}
                className={`absolute inset-0 transition-all duration-700 ease-out cursor-pointer ${card.shadowColor} shadow-2xl`}
                style={{
                  transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  className={`h-full w-full rounded-2xl backdrop-blur-lg border border-white/20 ${card.gradient} overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  {/* Card glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Content */}
                  <div className="relative p-8 text-white h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <p className="text-sm font-semibold opacity-80 mb-2 tracking-wider">
                          {card.title}
                        </p>
                        <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                          {card.value}
                        </h3>
                        <p className="text-sm opacity-70 font-medium">
                          {card.subtitle}
                        </p>
                      </div>
                      <div
                        className={`bg-gradient-to-br ${card.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}
                      >
                        {card.icon}
                      </div>
                    </div>

                    <p className="text-sm opacity-90 mb-6 leading-relaxed font-medium flex-1">
                      {card.description}
                    </p>

                    {/* Animated Chart */}
                    <div className="relative">
                      <div className="flex items-end justify-between gap-2 h-20 px-2 py-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                        {generateChartBars(card.id)}
                      </div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {generateFloatingElements()}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
            opacity: 0.9;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Animated;
