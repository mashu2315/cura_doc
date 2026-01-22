// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { isAuthenticated } from "@/lib/auth";

// export default function ProtectedRoute({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       router.push("/");
//     }
//   }, []);

//   return <>{children}</>;
// }


"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated, hasRole, getCurrentUserRole } from "@/lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "doctor" | "patient";
}

export default function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push("/");
      return;
    }

    // Check role-based access if requiredRole is specified
    if (requiredRole) {
      if (!hasRole(requiredRole)) {
        // Redirect to appropriate dashboard based on user's role
        const userRole = getCurrentUserRole();
        if (userRole) {
          router.push(`/dashboard/${userRole}`);
        } else {
          router.push("/");
        }
        return;
      }
    }

    // Auto-detect role from pathname and protect routes
    if (pathname?.startsWith("/dashboard/doctor")) {
      if (!hasRole("doctor")) {
        const userRole = getCurrentUserRole();
        if (userRole) {
          router.push(`/dashboard/${userRole}`);
        } else {
          router.push("/");
        }
        return;
      }
    }

    if (pathname?.startsWith("/dashboard/patient")) {
      if (!hasRole("patient")) {
        const userRole = getCurrentUserRole();
        if (userRole) {
          router.push(`/dashboard/${userRole}`);
        } else {
          router.push("/");
        }
        return;
      }
    }

    setIsLoading(false);
  }, [router, pathname, requiredRole]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-black">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
