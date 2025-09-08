import React from "react"
import { Home, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react"

export default function Sidebar({ collapsed = false, onToggle = () => {}, active = "mydata" }) {
  const navItems = [
    { id: "mydata", label: "My Data", Icon: Home },
    { id: "employees", label: "Employees", Icon: Users },
  ]

  return (
    <aside
      
      className={`flex flex-col bg-white border-r border-gray-200 ${
        collapsed ? "w-20" : "w-56"
      } transition-all duration-200`}
    >
  
      <div className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-black text-white flex items-center justify-center font-bold">
          T
        </div>

        
        {!collapsed && (
          <div>
            <div className="text-sm font-semibold">TeleCRM</div>
            <div className="text-xs text-gray-500">me@example.com</div>
          </div>
        )}
      </div>

     
      <nav className="flex-1 px-2 space-y-2">
        {navItems.map((item) => {
          const isActive = item.id === active
          return (
            <button
              key={item.id}
              type="button"
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
                isActive ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
              }`}
              title={item.label}
            >
              <item.Icon className="w-5 h-5" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>

      
      <div className="px-3 pb-4">
        <div className="mb-2">
          <button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-50">
            <Settings className="w-4 h-4" />
            {!collapsed && <span>Settings</span>}
          </button>
        </div>

        <div className="flex justify-center">
         
        </div>
      </div>
    </aside>
  )
}
