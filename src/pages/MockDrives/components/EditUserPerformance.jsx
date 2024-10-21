import React, { useState } from 'react';


export function EditUserPerformance({ performance, onSubmit, onClose }) {
  const [formData, setFormData] = useState<UserPerformance>(performance);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit User Performance</h3>
      <div className="mb-4">
        <label htmlFor="technicalAttempts" className="block text-sm font-medium text-gray-700">Technical Quiz Attempts</label>
        <input
          type="number"
          id="technicalAttempts"
          value={formData.technicalQuiz.attempts}
          onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, attempts: parseInt(e.target.value) } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="technicalScore" className="block text-sm font-medium text-gray-700">Technical Quiz Score</label>
        <input
          type="number"
          id="technicalScore"
          value={formData.technicalQuiz.score}
          onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, score: parseInt(e.target.value) } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
          max="100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="technicalStatus" className="block text-sm font-medium text-gray-700">Technical Quiz Status</label>
        <select
          id="technicalStatus"
          value={formData.technicalQuiz.status}
          onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, status: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="codingAttempts" className="block text-sm font-medium text-gray-700">Coding Quiz Attempts</label>
        <input
          type="number"
          id="codingAttempts"
          value={formData.codingQuiz.attempts}
          onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, attempts: parseInt(e.target.value) } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="codingScore" className="block text-sm font-medium text-gray-700">Coding Quiz Score</label>
        <input
          type="number"
          id="codingScore"
          value={formData.codingQuiz.score}
          onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, score: parseInt(e.target.value) } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
          max="100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="codingStatus" className="block text-sm font-medium text-gray-700">Coding Quiz Status</label>
        <select
          id="codingStatus"
          value={formData.codingQuiz.status}
          onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, status: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
          <option value="Not Attempted">Not Attempted</option>
        </select>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
        >
          Update Performance
        </button>
      </div>
    </form>
  );
}