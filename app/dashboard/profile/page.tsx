"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import { getCurrentUser } from "@/lib/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string; role: "doctor" | "patient" } | null>(null);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    extra: "",
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setProfile({
        name: currentUser.name,
        email: currentUser.email,
        extra: currentUser.role === "doctor" ? "General Physician" : "O+ Blood Group",
      });
    }
  }, []);

  const role = user?.role || "doctor";

  return (
    <ProtectedRoute>
      <DashboardLayout title="My Profile">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-black">Profile Details</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {role === "doctor" ? "Specialization" : "Blood Group"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                    value={profile.extra}
                    onChange={(e) =>
                      setProfile({ ...profile, extra: e.target.value })
                    }
                    placeholder={role === "doctor" ? "e.g., General Physician" : "e.g., O+"}
                  />
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                  {user?.name.charAt(0).toUpperCase() || "U"}
                </div>
                <h3 className="text-lg font-bold text-black">{user?.name || "User"}</h3>
                <p className="text-sm text-gray-600">{user?.email || ""}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                  {role === "doctor" ? "👨‍⚕️ Doctor" : "👤 Patient"}
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold mb-4 text-black">Quick Stats</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Total Appointments</span>
                  <span className="font-semibold text-black">
                    {role === "doctor" ? "128" : "12"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold text-black">
                    {role === "doctor" ? "24" : "3"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-green-600">Active</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
