import React from 'react';


export function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`mr-2 ${active ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
}