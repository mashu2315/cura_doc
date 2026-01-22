"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import { getCurrentUser } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function AppointmentsPage() {
  const [user, setUser] = useState<{ role: "doctor" | "patient" } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser({ role: currentUser.role });
    }
  }, []);

  const role = user?.role || "doctor";

  const appointments = role === "doctor" 
    ? [
        { id: 1, name: "Rahul Verma", date: "25 Jan, 2024", time: "10:30 AM", type: "General Checkup", status: "Confirmed" },
        { id: 2, name: "Neha Gupta", date: "28 Jan, 2024", time: "1:00 PM", type: "Follow-up", status: "Confirmed" },
        { id: 3, name: "Amit Singh", date: "30 Jan, 2024", time: "3:30 PM", type: "Consultation", status: "Pending" },
        { id: 4, name: "Pooja Mehta", date: "1 Feb, 2024", time: "11:00 AM", type: "Consultation", status: "Confirmed" },
      ]
    : [
        { id: 1, name: "Dr. Ashutosh Maurya", date: "25 Jan, 2024", time: "11:00 AM", type: "General Physician", status: "Confirmed" },
        { id: 2, name: "Dr. Meera Sharma", date: "2 Feb, 2024", time: "4:00 PM", type: "Cardiologist", status: "Confirmed" },
        { id: 3, name: "Dr. Rajesh Kumar", date: "5 Feb, 2024", time: "2:00 PM", type: "Dermatologist", status: "Pending" },
      ];

  return (
    <ProtectedRoute>
      <DashboardLayout title="Appointments">
        <div className="space-y-6">
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <p className="text-gray-600 text-sm md:text-base">
              {role === "doctor" 
                ? "Manage and view all your patient appointments" 
                : "View and manage your upcoming appointments"}
            </p>
            <button className="bg-black text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base w-full sm:w-auto">
              {role === "doctor" ? "Schedule New" : "Book Appointment"}
            </button>
          </div>

          {/* Appointments List */}
          <div className="grid gap-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-black">{appointment.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                        appointment.status === "Confirmed" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{appointment.type}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                      <span>📅 {appointment.date}</span>
                      <span>🕐 {appointment.time}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                      View Details
                    </button>
                    {role === "doctor" && (
                      <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm">
                        Start Consultation
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
