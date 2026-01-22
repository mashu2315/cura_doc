"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getCurrentUser, logout } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    role: "doctor" | "patient";
  } | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser({ name: currentUser.name, role: currentUser.role });
    }
  }, []);

  const role = user?.role || "doctor";
  const base = `/dashboard/${role}`;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const menu = [
    { name: "Dashboard", path: base, icon: "📊" },
    { name: "Appointments", path: "/dashboard/appointments", icon: "📅" },
    { name: "History", path: "/dashboard/history", icon: "📋" },
    { name: "Profile", path: "/dashboard/profile", icon: "👤" },
  ];

  const SidebarContent = () => (
    <>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-1">CuraDoc</h2>
        <p className="text-gray-400 text-xs">Healthcare Management</p>
      </div>

      <nav className="space-y-2 flex-1">
        {menu.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path === base && pathname.startsWith(base));

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-gray-900 text-gray-300"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 text-gray-300 transition"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-black text-white flex items-center justify-between px-4 py-3">
        <button onClick={() => setSidebarOpen(true)} className="text-xl">
          ☰
        </button>
        <h1 className="font-semibold text-lg">{title}</h1>
        <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold">
          {user?.name.charAt(0).toUpperCase() || "U"}
        </div>
      </div>

      {/* ===== Mobile Sidebar Drawer ===== */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-black text-white p-6 flex flex-col transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>
      </div>

      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-black text-white p-6 flex-col z-10">
        <SidebarContent />
      </aside>

      {/* ===== Main Content ===== */}
      <main className="md:ml-64 pt-16 md:pt-0 p-4 md:p-8 min-h-screen">
        {/* Desktop Header */}
        <header className="hidden md:flex justify-between items-center mb-8 pt-4 border-b">
          <div>
            <h1 className="text-3xl font-bold text-black mb-1">
              {title}
            </h1>
            {user && (
              <p className="text-gray-600 text-sm">
                Welcome back, {user.name}
              </p>
            )}
          </div>

          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold shadow">
            {user?.name.charAt(0).toUpperCase() || "U"}
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
