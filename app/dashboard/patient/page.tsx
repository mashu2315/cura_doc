"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import SectionCard from "@/components/SectionCard";

export default function PatientDashboard() {
  return (
    <ProtectedRoute requiredRole="patient">
      <DashboardLayout title="Patient Dashboard">
        {/* Welcome Section */}
        <div className="mb-8">
          <p className="text-gray-600">
            Track your health records, appointments, and medical history in one place.
          </p>
        </div>

        {/* Health Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard label="Blood Pressure" value="120/80" icon="🩺" />
          <StatCard label="Blood Sugar" value="98 mg/dL" icon="🩸" />
          <StatCard label="BMI" value="22.5" icon="⚖️" />
          <StatCard label="Heart Rate" value="72 bpm" icon="❤️" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Upcoming Appointments */}
          <SectionCard title="Upcoming Appointments" icon="📅">
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Dr. Ashutosh Maurya</p>
                  <p className="text-sm text-gray-600">General Physician</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-black">25 Jan, 2024</p>
                  <p className="text-xs text-gray-600">11:00 AM</p>
                </div>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-black">Dr. Meera Sharma</p>
                  <p className="text-sm text-gray-600">Cardiologist</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-black">2 Feb, 2024</p>
                  <p className="text-xs text-gray-600">4:00 PM</p>
                </div>
              </li>
            </ul>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm">
              Book New Appointment
            </button>
          </SectionCard>

          {/* Medical History */}
          <SectionCard title="Medical History" icon="📋">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-black">Viral Fever</p>
                  <p className="text-xs text-gray-600">December 2024</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-black">Back Pain Treatment</p>
                  <p className="text-xs text-gray-600">August 2024</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-black">Allergy Consultation</p>
                  <p className="text-xs text-gray-600">January 2024</p>
                </div>
              </li>
            </ul>
            <button className="mt-4 w-full text-sm text-black font-semibold hover:underline">
              View Full History →
            </button>
          </SectionCard>
        </div>

        {/* Prescriptions & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <SectionCard title="Current Prescriptions" icon="💊">
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-black">Paracetamol 500mg</p>
                  <p className="text-xs text-gray-600">Take 1 tablet twice daily</p>
                </div>
                <span className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full">5 days left</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-black">Vitamin D3</p>
                  <p className="text-xs text-gray-600">Take 1 capsule weekly</p>
                </div>
                <span className="text-xs font-medium text-white bg-black px-3 py-1 rounded-full">Ongoing</span>
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Quick Actions" icon="⚡">
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm">
                Book Appointment
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                View Reports
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                Download Records
              </button>
              <button className="border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm">
                Emergency Contact
              </button>
            </div>
          </SectionCard>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
