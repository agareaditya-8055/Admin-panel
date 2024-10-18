import React from 'react';

export default function Table({ data, columns, specialColumns }) {
    console.log(data);
    
  return (
    <div className='p-10'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-200'>
            {columns.map((col) => (
              <th key={col.field} className='border p-2'>
                {col.label}
              </th>
            ))}
            {specialColumns && specialColumns.map((special) => (
              <th key={special.field} className='border p-2'>
                {special.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.field} className='border p-2'>
                  {item[col.field]}
                </td>
              ))}
              {specialColumns && specialColumns.map((special) => (
                <td key={special.field} className='border p-2'>
                  {/* Handling nested fields like role.role */}
                  <span className={special.className}>
                    {special.field === 'role' ? item.role?.role : item[special.field]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
