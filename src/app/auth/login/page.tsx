"use client";
import Animated from "@/components/atoms/Animated";
import Logo from "@/components/atoms/Logo";
import { PublicRoute } from "@/components/guards/RouteGuards";
import LoginForm from "@/features/auth/components/LoginForm";

const Login = () => {
  return (
    <PublicRoute>
      <div className="min-h-screen flex">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center bg-white px-6 lg:px-0">
          <div className="w-full max-w-sm">
            <div className="mb-5">
              <Logo />

              <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight mt-5">
                Optimize your advertising strategy with our system
              </h1>
              <p className="text-gray-600 text-sm">
                Login to get started with our office system
              </p>
            </div>
            <LoginForm />
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

export default Login;
