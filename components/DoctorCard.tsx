import React from 'react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
}

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-blue-600">{doctor.name}</h3>
      <p className="text-gray-600">Specialty: {doctor.specialty}</p>
      <p className="text-gray-600">Experience: {doctor.experience} years</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Book Appointment</button>
    </div>
  );
};

export default DoctorCard;