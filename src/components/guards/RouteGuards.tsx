"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface RouteGuardProps {
  children: React.ReactNode;
}

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
  </div>
);

// Private Route - requires authentication
export const PrivateRoute = ({ children }: RouteGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router, isClient]);

  if (!isClient || isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

// Public Route - redirects to dashboard if already authenticated
export const PublicRoute = ({ children }: RouteGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isLoading, router, isClient]);

  if (!isClient || isLoading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};
