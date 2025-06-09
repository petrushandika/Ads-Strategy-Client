"use client";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Enhanced Logo with Counter-rotating Layers */}
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-12 h-12 border-2 border-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full animate-spin opacity-30"></div>

        {/* Main logo container - rotates clockwise */}
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform shadow-2xl animate-spin-slow relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>

          {/* Second layer - rotates counter-clockwise */}
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-lg flex items-center justify-center transform shadow-inner animate-spin-reverse relative">
            {/* Inner core - rotates clockwise again */}
            <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-md flex items-center justify-center animate-spin-slow shadow-lg">
              {/* Center dot */}
              <div className="w-2 h-2 bg-white rounded-full shadow-inner animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1 -left-2 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Enhanced Text with Gradient and Animation */}
      <div className="relative">
        <div className="relative z-10">
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Ads Strategy
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              System
            </span>
          </div>
        </div>

        {/* Text glow effect */}
        <div className="absolute inset-0 text-xl font-extrabold text-indigo-400 opacity-20 blur-sm">
          Ads Strategy
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Logo;
