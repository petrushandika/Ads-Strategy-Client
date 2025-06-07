"use client";
import Animated from "@/components/atoms/Animated";
import { PublicRoute } from "@/components/guards/RouteGuards";
import ForgotForm from "@/features/auth/components/ForgotForm";

const Forgot = () => {
  return (
    <PublicRoute>
      <div className="min-h-screen flex">
        {/* Left Side - Forgot Form */}
        <div className="flex-1 flex items-center justify-center bg-white px-6 lg:px-12">
          <div className="w-full max-w-sm">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    Ads Strategy
                  </span>
                  <div className="text-sm font-medium text-indigo-600">
                    System
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                Optimize your advertising strategy with our system
              </h1>
              <p className="text-gray-600 text-sm">
                Enter Your Email or Phone Number To Reset Your Password Quickly{" "}
              </p>
            </div>
            <ForgotForm />
          </div>
        </div>

        {/* Right Side - Animated Background */}
        <div className="flex-1 relative overflow-hidden hidden md:block">
          <Animated />
        </div>
      </div>
    </PublicRoute>
  );
};

export default Forgot;
