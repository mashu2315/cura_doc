"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import SectionCard from "@/components/SectionCard";

export default function DoctorDashboard() {
  return (
    <ProtectedRoute requiredRole="doctor">
      <DashboardLayout title="Doctor Dashboard">
        <div className="w-full">
            {/* Welcome Section */}
        <div className="mb-8">
          <p className="text-gray-600">
            Manage your practice, appointments, and patient records from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard label="Total Patients" value="128" icon="👥" />
          <StatCard label="Appointments Today" value="6" icon="📅" />
          <StatCard label="Pending Reports" value="12" icon="📋" />
          <StatCard label="Monthly Revenue" value="₹45,000" icon="💰" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Today's Appointments */}
          <SectionCard title="Today's Appointments" icon="📅">
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Rohit Sharma</p>
                  <p className="text-sm text-gray-600">General Checkup</p>
                </div>
                <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full">10:30 AM</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Anjali Verma</p>
                  <p className="text-sm text-gray-600">Follow-up Visit</p>
                </div>
                <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full">12:00 PM</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Mohit Jain</p>
                  <p className="text-sm text-gray-600">Consultation</p>
                </div>
                <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full">3:45 PM</span>
              </li>
            </ul>
            <button className="mt-4 w-full text-sm text-black font-semibold hover:underline">
              View All Appointments →
            </button>
          </SectionCard>

          {/* Recent Patients */}
          <SectionCard title="Recent Patients" icon="👥">
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Neha Gupta</p>
                  <p className="text-sm text-gray-600">Age: 32 | Last Visit: 2 days ago</p>
                </div>
                <span className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full">Fever</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Amit Singh</p>
                  <p className="text-sm text-gray-600">Age: 45 | Last Visit: 5 days ago</p>
                </div>
                <span className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full">Diabetes</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Pooja Mehta</p>
                  <p className="text-sm text-gray-600">Age: 28 | Last Visit: 1 week ago</p>
                </div>
                <span className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full">Back Pain</span>
              </li>
            </ul>
            <button className="mt-4 w-full text-sm text-black font-semibold hover:underline">
              View All Patients →
            </button>
          </SectionCard>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 ">
          <SectionCard title="Quick Actions" icon="⚡">
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm">
                Add Prescription
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                View Reports
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                Schedule Appointment
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                Patient Records
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Pending Tasks" icon="📝">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-sm text-gray-700">Review lab reports for 3 patients</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-sm text-gray-700">Update prescription for Neha Gupta</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-sm text-gray-700">Follow-up call with Amit Singh</span>
              </li>
            </ul>
          </SectionCard>
        </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
