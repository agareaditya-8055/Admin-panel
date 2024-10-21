import React, { useState } from 'react';


export function AddEditMockDriveForm({ drive, onSubmit, onClose }) {
  const [formData, setFormData] = useState<MockDrive>(drive || { companyName: '', description: '', status: 'Active', participants: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{drive ? 'Edit Mock Drive' : 'Add Mock Drive'}</h3>
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Participants</label>
        <input
          type="number"
          id="participants"
          value={formData.participants}
          onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
        />
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
        >
          {drive ? 'Update Mock Drive' : 'Add Mock Drive'}
        </button>
      </div>
    </form>
  );
}