"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated, getCurrentUser } from "@/lib/auth";

interface GuestRouteProps {
  children: React.ReactNode;
}

export default function GuestRoute({ children }: GuestRouteProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    if (isAuthenticated()) {
      // Get current user to redirect to their role-specific dashboard
      const user = getCurrentUser();
      if (user) {
        router.push(`/dashboard/${user.role}`);
      } else {
        // If user data is missing, redirect to main dashboard
        router.push("/dashboard");
      }
      return;
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-black">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
