import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = [
    {
      id: 1,
      header: "Customer_Leads_Q1_2024.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 18,
      limit: 10,
      reviewer: "Priya Sharma",
    },
    {
      id: 2,
      header: "Prospect_List_Mumbai.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Priya Sharma",
    },
    {
      id: 3,
      header: "Follow_Up_Customers.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 10,
      limit: 3,
      reviewer: "Priya Sharma",
    },
    {
      id: 4,
      header: "Hot_Leads_January.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 27,
      limit: 14,
      reviewer: "Amit Patel",
    },
    {
      id: 5,
      header: "Cold_Leads_Backup.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 2,
      limit: 8,
      reviewer: "Amit Patel",
    },
    {
      id: 6,
      header: "Weekly_Prospects.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 20,
      limit: 9,
      reviewer: "Amit Patel",
    },
    {
      id: 7,
      header: "Customer_Leads_Q1_2024.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 18,
      limit: 10,
      reviewer: "Priya Sharma",
    },
    {
      id: 8,
      header: "Prospect_List_Mumbai.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
    {
      id: 9,
      header: "Hot_Leads_January.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
    {
      id: 10,
      header: "Cold_Leads_Backup.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
  ];

 
  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const StatusBadge = ({ status }) => {
    if (status === "Done") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Done</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span className="text-sm text-gray-700">In Process</span>
        </div>
      );
    }
  };

  return (
    <div className=" overflow-hidden">
      <div className="overflow-x-auto mb-4 bg-white border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={toggleAllRows}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Header
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Created Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Records
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Limit
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Reviewer
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-gray-100 hover:bg-gray-50 ${
                  selectedRows.includes(row.id) ? "bg-blue-50" : ""
                }`}
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRowSelection(row.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-900 font-medium">
                    {row.header}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600">
                    {row.createdDate}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-900 font-medium">
                    {row.records}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-900 font-medium">
                    {row.limit}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                      {row.reviewer}
                    </span>
                    {row.reviewer === "Assign review..." && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mb-4 px-4 py-3 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>0 of 68 row(s) selected</span>
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Page 1 of 7</span>
          <div className="flex items-center gap-1 ml-4">
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
              <ChevronsLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
              <ChevronsRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;