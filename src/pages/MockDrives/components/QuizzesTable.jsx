import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export function QuizzesTable({ quizzes, onEdit, onDelete }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quizzes</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {quizzes.map((quiz) => (
            <tr className='text-xs' key={quiz.id}>
              <td className="px-6 py-4 whitespace-nowrap">{quiz.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{quiz.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{quiz.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{quiz.passScore}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onEdit(quiz)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <FaEdit />
                </button>
                <button onClick={() => onDelete(quiz.id)} className="text-red-600 hover:text-red-900">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}