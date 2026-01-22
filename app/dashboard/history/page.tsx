"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import { getCurrentUser } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [user, setUser] = useState<{ role: "doctor" | "patient" } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser({ role: currentUser.role });
    }
  }, []);

  const role = user?.role || "patient";

  const history = role === "doctor"
    ? [
        { id: 1, patient: "Rahul Verma", condition: "Fever", date: "20 Jan, 2024", status: "Completed" },
        { id: 2, patient: "Neha Gupta", condition: "Diabetes Check", date: "15 Jan, 2024", status: "Completed" },
        { id: 3, patient: "Amit Singh", condition: "Back Pain", date: "10 Jan, 2024", status: "Completed" },
        { id: 4, patient: "Pooja Mehta", condition: "Allergy", date: "5 Jan, 2024", status: "Completed" },
      ]
    : [
        { id: 1, doctor: "Dr. Ashutosh Maurya", condition: "Viral Fever", date: "Dec 2024", status: "Completed" },
        { id: 2, doctor: "Dr. Meera Sharma", condition: "Back Pain Treatment", date: "Aug 2024", status: "Completed" },
        { id: 3, doctor: "Dr. Rajesh Kumar", condition: "Allergy Consultation", date: "Jan 2024", status: "Completed" },
      ];

  return (
    <ProtectedRoute>
      <DashboardLayout title={role === "doctor" ? "Patient History" : "Medical History"}>
        <div className="space-y-6">
          <p className="text-gray-600">
            {role === "doctor" 
              ? "View complete history of all your patient consultations" 
              : "Your complete medical history and past consultations"}
          </p>

          <div className="grid gap-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <h3 className="text-lg font-bold text-black">
                        {role === "doctor" ? item.patient : item.doctor}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{item.condition}</p>
                    <p className="text-sm text-gray-500">📅 {item.date}</p>
                  </div>
                  <button className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
