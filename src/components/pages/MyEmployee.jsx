import React, { useState, useMemo } from "react";
import {
  PanelLeft,
  Plus,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const MyEmployees = ({ onToggleSidebar }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPassword, setShowPassword] = useState({});

  const employees = [
    {
      id: "EMP001",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
      password: "temp123",
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      email: "priya.sharma@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
      password: "temp456",
    },
    {
      id: "EMP003",
      name: "Amit Patel",
      email: "amit.patel@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
      password: "temp789",
    },
    {
      id: "EMP004",
      name: "Sneha Singh",
      email: "sneha.singh@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
      password: "temp321",
    },
    {
      id: "EMP005",
      name: "Vikram Gupta",
      email: "vikram.gupta@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
      password: "temp654",
    },
    {
      id: "EMP006",
      name: "Anita Verma",
      email: "anita.verma@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Team Lead",
      password: "temp987",
    },
    {
      id: "EMP007",
      name: "Rohit Mehta",
      email: "rohit.mehta@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
      password: "temp147",
    },
    {
      id: "EMP008",
      name: "Kavya Reddy",
      email: "kavya.reddy@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
      password: "temp258",
    },
    {
      id: "EMP009",
      name: "Suresh Kumar",
      email: "suresh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
      password: "temp369",
    },
    {
      id: "EMP010",
      name: "Deepika Jain",
      email: "deepika.jain@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
      password: "temp741",
    },
    {
      id: "EMP011",
      name: "Manoj Tiwari",
      email: "manoj.tiwari@company.com",
      dateCreated: "Jan 16, 2024",
      status: "Active",
      role: "Team Lead",
      password: "temp852",
    },
    {
      id: "EMP012",
      name: "Ritu Agarwal",
      email: "ritu.agarwal@company.com",
      dateCreated: "Jan 16, 2024",
      status: "Inactive",
      role: "Senior Telecaller",
      password: "temp963",
    },
  ];

  // Filter and search functionality
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch = 
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || employee.status.toLowerCase() === statusFilter.toLowerCase();
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === currentEmployees.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentEmployees.map((emp) => emp.id));
    }
  };

  const togglePasswordVisibility = (id) => {
    setShowPassword(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getRoleBadge = (role) => {
    const roleStyles = {
      "Telecaller": "bg-blue-50 text-blue-700 border-blue-200",
      "Senior Telecaller": "bg-yellow-50 text-yellow-700 border-yellow-200",
      "Team Lead": "bg-purple-50 text-purple-700 border-purple-200",
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${roleStyles[role] || "bg-gray-50 text-gray-700 border-gray-200"}`}>
        {role}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    return (
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}></div>
        <span className="text-sm text-gray-700 font-medium">{status}</span>
      </div>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedRows([]);
  };

  return (
    <div className="px-6 pt-2 pb-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleSidebar}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <PanelLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">My Employees</h1>
          </div>
        </div>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4" />
          Add New Employee
        </Button>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">Here's a list of your Employees</p>

      {/* Filters and Search */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter Employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Status
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setStatusFilter("all")}>
              All Status
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("active")}>
              Active
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>
              Inactive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Priority
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Priority</DropdownMenuItem>
            <DropdownMenuItem>High</DropdownMenuItem>
            <DropdownMenuItem>Medium</DropdownMenuItem>
            <DropdownMenuItem>Low</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {currentEmployees.length} of {filteredEmployees.length} employees
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === currentEmployees.length && currentEmployees.length > 0}
                    onChange={toggleAllRows}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Employee ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name & Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date Created</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Password</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    selectedRows.includes(employee.id) ? "bg-blue-50" : ""
                  }`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(employee.id)}
                      onChange={() => toggleRowSelection(employee.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-medium text-gray-900">
                      {employee.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {employee.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-600">
                      {employee.dateCreated}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {getStatusBadge(employee.status)}
                  </td>
                  <td className="px-4 py-4">
                    {getRoleBadge(employee.role)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-gray-900">
                        {showPassword[employee.id] ? employee.password : "••••••"}
                      </span>
                      <button
                        onClick={() => togglePasswordVisibility(employee.id)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        {showPassword[employee.id] ? (
                          <EyeOff className="w-3 h-3 text-gray-400" />
                        ) : (
                          <Eye className="w-3 h-3 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="w-4 h-4" />
                          Edit Employee
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <Trash2 className="w-4 h-4" />
                          Delete Employee
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{selectedRows.length} of {filteredEmployees.length} row(s) selected</span>
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value={10}>10</option>
              <option value={12}>12</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-1 ml-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEmployees;