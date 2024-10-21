import React from 'react';
import { FaEdit } from 'react-icons/fa';

export function UserPerformanceTable({ userPerformance, onEdit }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">User Performance</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technical Quiz</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coding Quiz</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userPerformance.map((performance) => (
            <tr className='text-xs' key={performance.id}>
              <td className="px-6 py-4 whitespace-nowrap">{performance.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Attempts: {performance.technicalQuiz.attempts}, Score: {performance.technicalQuiz.score}, Status: {performance.technicalQuiz.status}
              </td>
              <td className="px-6  py-4 whitespace-nowrap">
                Attempts: {performance.codingQuiz.attempts}, Score: {performance.codingQuiz.score}, Status: {performance.codingQuiz.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onEdit(performance)} className="text-indigo-600 hover:text-indigo-900">
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}