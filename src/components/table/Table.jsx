import React, { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaEdit, FaTrash } from "react-icons/fa"

const DropdownMenu = ({ isOpen, onEdit, onDelete }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div className="py-1">
        <button
          onClick={onEdit}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition duration-150 ease-in-out"
        >
          <FaEdit className="inline-block mr-2" /> Edit
        </button>
        <button
          onClick={onDelete}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition duration-150 ease-in-out"
        >
          <FaTrash className="inline-block mr-2" /> Delete
        </button>
      </div>
    </div>
  )
}

const Table = ({ data, columns, specialColumns, onEdit, onDelete, selectedRows, setSelectedRows }) => {
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

  return (
    <div className="rounded-lg">
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
              <th className="py-3 px-6">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              {columns.map((col) => (
                <th key={col.field} className="py-3 px-6 text-left font-semibold">
                  {col.label}
                </th>
              ))}
              {specialColumns.map((special) => (
                <th key={special.field} className="py-3 px-6 text-left font-semibold">
                  {special.label}
                </th>
              ))}
              <th className="py-3 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-medium text-xs">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </td>
                {columns.map((col) => (
                  <td key={col.field} className="py-3 px-6 whitespace-nowrap">
                    {item[col.field]}
                  </td>
                ))}
                {specialColumns.map((special) => (
                  <td key={special.field} className="py-3 px-6 whitespace-nowrap">
                    {special.field === 'status' ? (
                      <span className={`px-2 py-1 rounded-full text-[11.3px] font-medium ${
                        item[special.field] === 'Active' ? 'bg-green-100 border border-green-200 text-green-600 ' : 'bg-red-100 text-red-600 border border-red-200'
                      }`}>
                        {item[special.field]}
                      </span>
                    ) : special.field === 'role' ? (
                      <span className={`px-2 py-1 rounded-full font-medium text-[11.3px] ${
                        item[special.field] === 'Admin' ? 'bg-purple-100 text-purple-600 border border-purple-200' :
                        item[special.field] === 'Editor' ? 'bg-blue-100 text-blue-600 border border-blue-200' : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        {item[special.field]}
                      </span>
                    ) : (
                      item[special.field]
                    )}
                  </td>
                ))}
                <td className="py-3 px-6 text-center relative">
                  <button
                    onClick={() => handleDropdownToggle(item.id)}
                    className="text-gray-500 hover:text-gray-700 transition duration-150"
                  >
                    <BsThreeDotsVertical />
                  </button>
                  <DropdownMenu
                    isOpen={openDropdown === item.id}
                    onClose={() => setOpenDropdown(null)}
                    onEdit={() => onEdit(item)}
                    onDelete={() => onDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table