import React, { useState } from 'react'

const Table = ({ data, columns, onEdit, onDelete, selectedRows, setSelectedRows }) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [selectAll, setSelectAll] = useState(false)

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      setSelectedRows(data.map((item) => item.id))
    } else {
      setSelectedRows([])
    }
  }

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border border-green-300'
      case 'inactive':
        return 'bg-red-100 text-red-800 border border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300'
    }
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.field}
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleRowSelect(item.id)}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
              </td>
              {columns.map((column) => (
                <td key={column.field} className="px-6 py-4 whitespace-nowrap">
                  {column.field === 'fullName' ? (
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={item.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-xs font-medium text-gray-900">{item[column.field]}</div>
                        <div className="text-xs text-gray-500">{item.email}</div>
                      </div>
                    </div>
                  ) : column.field === 'status' ? (
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(item[column.field])}`}>
                      {item[column.field]}
                    </span>
                  ) : column.field === 'location' ? (
                    <div className="flex items-center">
                      <img
                        src={`https://flagcdn.com/w20/${item.countryCode.toLowerCase()}.png`}
                        alt={`${item[column.field]} flag`}
                        className="mr-2 h-4"
                      />
                      <span className="text-xs text-gray-900">{item[column.field]}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-900">{item[column.field]}</span>
                  )}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                <button
                  onClick={() => handleDropdownToggle(item.id)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                {openDropdown === item.id && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <button
                        onClick={() => onEdit(item)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(item.id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;