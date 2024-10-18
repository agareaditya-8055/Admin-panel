import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaSearch, FaFilter } from "react-icons/fa"
import Table from "../../components/table/Table"
import Modal from "../../components/modal/Modal"
import { fetchAllUsers } from "../../redux/api/users.api"

export default function User() {
  const selector = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if (selector.status === "idle") {
      dispatch(fetchAllUsers())
    }
  }, [dispatch, selector.status])

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      status: 'Active',
      role: 'Admin',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'Inactive',
      role: 'User',
    },
    {
      id: 3,
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      status: 'Active',
      role: 'Editor',
    },
  ])

  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
    user: null,
  })

  const [selectedRows, setSelectedRows] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    status: "",
    role: "",
  })

  const handleEdit = (user) => {
    setModalData({
      isOpen: true,
      type: "edit",
      user,
    })
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleDeleteSelected = () => {
    setUsers(users.filter((user) => !selectedRows.includes(user.id)))
    setSelectedRows([])
  }

  const handleAddNewUser = () => {
    setModalData({
      isOpen: true,
      type: "add",
      user: null,
    })
  }

  const handleModalConfirm = (formData) => {
    if (modalData.type === "add") {
      const newUser = {
        id: users.length + 1,
        ...formData,
      }
      setUsers([...users, newUser])
    } else if (modalData.type === "edit") {
      const updatedUsers = users.map((user) =>
        user.id === modalData.user.id ? { ...user, ...formData } : user
      )
      setUsers(updatedUsers)
    }
    setModalData({ isOpen: false, type: "", user: null })
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filters.status === "" || user.status === filters.status
    const matchesRole = filters.role === "" || user.role === filters.role
    return matchesSearch && matchesStatus && matchesRole
  })

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="role"
              value={filters.role}
              onChange={handleFilterChange}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Editor">Editor</option>
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="space-x-2">
          <button
            onClick={handleAddNewUser}
            className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-gray-600 transition duration-300"
          >
            Add User
          </button>
          {selectedRows.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
            >
              Delete Selected
            </button>
          )}
        </div>
      </div>

      <Table
        data={filteredUsers}
        columns={[
          { label: "#", field: "id" },
          { label: "Full Name", field: "fullName" },
          { label: "Email", field: "email" },
        ]}
        specialColumns={[
          { label: "Status", field: "status" },
          { label: "Role", field: "role" },
        ]}
        onEdit={handleEdit}
        onDelete={handleDelete}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <Modal
        isOpen={modalData.isOpen}
        title={modalData.type === "edit" ? "Edit User" : "Add New User"}
        user={modalData.user}
        onClose={() => setModalData({ isOpen: false, type: "", user: null })}
        onConfirm={handleModalConfirm}
      />
    </div>
  )
}