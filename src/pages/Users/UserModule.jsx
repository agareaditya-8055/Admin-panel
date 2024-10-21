import { useState, useRef } from "react"
import Table from "./components/Table"
import Modal from "./components/Modal"
import { FaFilter, FaSearch, FaUpload } from "react-icons/fa"

export default function UserModule() {
  const [users, setUsers] = useState( [
    {
      id: 1,
      fullName: 'Thomas Clark',
      email: 'thomas.clark@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Admin',
      status: 'Active',
      location: 'Switzerland',
      countryCode: 'CH',
      lastActivity: 'Today, 11:00',
    },
    {
      id: 2,
      fullName: 'Justin Adams',
      email: 'justin.adams@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Student',
      status: 'Active',
      location: 'Czech Republic',
      countryCode: 'CZ',
      lastActivity: 'Yesterday, 15:30',
    },
    {
      id: 3,
      fullName: 'Charles Carter',
      email: 'charles.carter@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Admin',
      status: 'Active',
      location: 'Hungary',
      countryCode: 'HU',
      lastActivity: 'Today, 10:30',
    },
    {
      id: 4,
      fullName: 'Jessica Evans',
      email: 'jessica.evans@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Student',
      status: 'Inactive',
      location: 'Poland',
      countryCode: 'PL',
      lastActivity: 'Today, 13:45',
    },
    {
      id: 5,
      fullName: 'Esther Howard',
      email: 'esther.howard@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Super Admin',
      status: 'Active',
      location: 'Malaysia',
      countryCode: 'MY',
      lastActivity: 'Week ago',
    },
    {
      id: 6,
      fullName: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Student',
      status: 'Inactive',
      location: 'Canada',
      countryCode: 'CA',
      lastActivity: 'Current session',
    },
    {
      id: 7,
      fullName: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Admin',
      status: 'Active',
      location: 'United Kingdom',
      countryCode: 'GB',
      lastActivity: 'Today, 09:15',
    },
    {
      id: 8,
      fullName: 'Michael Brown',
      email: 'michael.brown@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Admin',
      status: 'Inactive',
      location: 'Germany',
      countryCode: 'DE',
      lastActivity: 'Yesterday, 18:00',
    },
    {
      id: 9,
      fullName: 'Sophia Lee',
      email: 'sophia.lee@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'student',
      status: 'Inactive',
      location: 'Japan',
      countryCode: 'JP',
      lastActivity: 'Today, 14:30',
    },
    {
      id: 10,
      fullName: 'Daniel Martinez',
      email: 'daniel.martinez@example.com',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Student',
      status: 'Active',
      location: 'Spain',
      countryCode: 'ES',
      lastActivity: '3 days ago',
    },
  ])

  const [selectedRows, setSelectedRows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: '',
    role: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleEdit = (user) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }


  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddUser = () => {
    setEditingUser(null)
    setIsModalOpen(true)
  }

  const handleModalConfirm = (formData) => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? { ...user, ...formData } : user)))
    } else {
      const newUser = {
        id: users.length + 1,
        ...formData,
        avatar: '/placeholder.svg?height=40&width=40',
        lastActivity: 'Just now',
      }
      setUsers([...users, newUser])
    }
    setIsModalOpen(false)
  }

  const handleDeleteSelected = () => {
    setUsers(users.filter((user) => !selectedRows.includes(user.id)))
    setSelectedRows([])
  }

  const parseCSV = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(header => header.trim());
    const parsedData = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index] ? values[index].trim() : '';
        return obj;
      }, {});
    });
    console.log('Parsed CSV data:', parsedData);
    return parsedData;
  }

  const handleFileUpload = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      console.log('Raw CSV text:', text);
      const parsedData = parseCSV(text)
      console.log('Number of parsed rows:', parsedData.length);
      const newUsers = parsedData.map((userData, index) => ({
        id: users.length + index + 1,
        fullName: userData.fullName || 'Unknown',
        email: userData.email || 'unknown@example.com',
        avatar: '/placeholder.svg?height=40&width=40',
        role: userData.role || 'User',
        status: userData.status || 'Active',
        location: userData.location || 'Unknown',
        countryCode: userData.countryCode || 'UN',
        lastActivity: 'Just now',
      }))
      setUsers((prevUsers) => [...newUsers, ...prevUsers])
    }
    reader.readAsText(file)
  }


  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'text/csv') {
      handleFileUpload(file)
    } else {
      alert('Please upload a CSV file')
    }
  }

  const handleCSVButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'text/csv') {
      handleFileUpload(file)
    } else {
      alert('Please upload a CSV file')
    }
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filters.status === '' || user.status === filters.status
    const matchesRole = filters.role === '' || user.role === filters.role
    return matchesSearch && matchesStatus && matchesRole
  })

  const columns = [
    { label: 'Member', field: 'fullName' },
    { label: 'Role', field: 'role' },
    { label: 'Status', field: 'status' },
    { label: 'Location', field: 'location' },
    { label: 'Activity', field: 'lastActivity' },
  ]

  return (
    <div 
      className="container mx-auto px-4 py-8"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Candidates</h1>
        <p className="mt-1 text-sm text-gray-600">
          Showing {filteredUsers.length} of {users.length} candidates
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full sm:w-64 pl-10 pr-4 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="appearance-none w-full sm:w-32 pl-10 pr-4 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="appearance-none w-full sm:w-32 pl-10 pr-4 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Student">Student</option>
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <button 
            onClick={handleDeleteSelected}
            disabled={selectedRows.length === 0}
            className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
          >
            Delete Selected
          </button>
          <button 
            onClick={handleCSVButtonClick}
            className="bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
          >
            <FaUpload className="mr-2" /> Upload CSV
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept=".csv"
            className="hidden"
          />
          <button 
            onClick={handleAddUser}
            className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 "
          >
            Add User
          </button>
        </div>
      </div>

      {isDragging && (
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 mb-6 text-center text-gray-500">
          Drop your CSV file here
        </div>
      )}

      <Table
        data={filteredUsers}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <Modal
        isOpen={isModalOpen}
        title={editingUser ? 'Edit User' : 'Add User'}
        user={editingUser}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleModalConfirm}
      />
    </div>
  )
}