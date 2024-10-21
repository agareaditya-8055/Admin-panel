import React from 'react';



export function UserPerformance({ driveId, onClose }) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">User Performance for Drive {driveId}</h3>
      {/* Add user performance details here */}
      <button onClick={onClose} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Close
      </button>
    </div>
  );
}