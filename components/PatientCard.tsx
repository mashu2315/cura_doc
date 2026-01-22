import React from 'react';

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
}

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-green-600">{patient.name}</h3>
      <p className="text-gray-600">Age: {patient.age}</p>
      <p className="text-gray-600">Condition: {patient.condition}</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">View Records</button>
    </div>
  );
};

export default PatientCard;