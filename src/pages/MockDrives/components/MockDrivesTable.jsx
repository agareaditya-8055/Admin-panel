import React from 'react';
import { FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';


export function MockDrivesTable({ mockDrives, onAdd, onEdit, onDelete, onAddQuiz, onViewPerformance }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Mock Drives</h3>
      <button
        onClick={onAdd}
        className="mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-4 rounded"
      >
        Add Mock Drive
      </button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockDrives.map((drive) => (
            <tr key={drive.id}>
              <td className="px-6 text-xs py-4 whitespace-nowrap">{drive.companyName}</td>
              <td className="px-6 py-4 text-xs whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  drive.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {drive.status}
                </span>
              </td>
              <td className="px-6 py-4 text-xs whitespace-nowrap">{drive.participants}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onEdit(drive)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <FaEdit />
                </button>
                <button onClick={() => onDelete(drive.id)} className="text-red-600 hover:text-red-900 mr-2">
                  <FaTrash />
                </button>
                <button onClick={() => onAddQuiz(drive.id)} className="text-green-600 hover:text-green-900 mr-2">
                  <FaPlus />
                </button>
                <button onClick={() => onViewPerformance(drive.id)} className="text-red-600 hover:text-red-900">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}