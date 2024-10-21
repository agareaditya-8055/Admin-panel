import React from 'react';
import { FaEdit } from 'react-icons/fa';



export function InterviewsTable({ interviews, onAdd, onEdit }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Interviews</h3>
      <button
        onClick={onAdd}
        className="mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-4 rounded"
      >
        Schedule Interview
      </button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {interviews.map((interview) => (
            <tr className='text-xs' key={interview.id}>
              <td className="px-6 py-4 whitespace-nowrap">{interview.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{interview.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{interview.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onEdit(interview)} className="text-indigo-600 hover:text-indigo-900">
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