import React from "react";
import {
  PanelLeft,
  CirclePlus,
  Plus,
  ChevronDown,
  Columns2,
} from "lucide-react";
import Cards from "../Cards/DashbaordCards";
import DataTable from "./DataTable";
import DashboardCards from "../Cards/DashbaordCards";

const Sidebar = ({ onToggleSidebar }) => {
  return (
    <div className="px-6 pt-2 pd-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2" onClick={onToggleSidebar}>
          <PanelLeft className="w-6 h-6 text-gray-700" />
          <span className="text-sm font-medium text-gray-800">My Data</span>
        </div>
        <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
          <CirclePlus className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-800">
            Quick Access
          </span>
        </div>
      </div>
      <DashboardCards/>
      <div className="p-4  rounded-lg ">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg text-sm font-medium">
            <button className="flex items-center gap-1 px-4 py-2 bg-white rounded-md text-gray-800 shadow-sm">
              Outline
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Past Performance
              <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Key Personnel
              <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </button>
            <button className="flex items-center px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Focus Documents
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <button className="flex items-center gap-2 h-9 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-50">
              <Columns2 className="h-4 w-4" />
              Customize Columns
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 h-9 border border-gray-300 rounded-md bg-white text-sm font-medium px-3 py-2 hover:bg-gray-50">
              <Plus className="h-4 w-4" />
              Add Section
            </button>
          </div>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Sidebar;