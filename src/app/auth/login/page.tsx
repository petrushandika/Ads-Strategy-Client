"use client";

import { PublicRoute } from "@/components/guards/RouteGuards";

export default function Login() {
  return (
    <PublicRoute>
      <div className="flex flex-col gap-5 mb-20">
        <h1 className="text-black text-xl font-semibold">Login</h1>
        {/* Form login akan ditambahkan di sini */}
      </div>
    </PublicRoute>
  );
}
