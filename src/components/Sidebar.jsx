import React from 'react'
import  { Home, Users, Settings } from "lucide-react"
import { Button } from "../components/ui/button"


export default  function Sidebar() {
    const items = [
        { id: "mydata", lable: "My Data", icon: Home},
        { id: "employees", lable: "My Employees", icon: Users},
        { id: "settings", lable: "My Data", icon: Settings},
    ]

  return (
   <aside className="w-64 border-r bg-white min-h-screen p-4 flex flex-col">
      {/* Logo / Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded bg-black text-white font-bold">
          T
        </div>
        <div>
          <p className="font-semibold">TeleCRM</p>
          <p className="text-xs text-gray-500">m@example.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {items.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant="ghost"
            className="justify-start gap-2"
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-4">
        <Button variant="ghost" className="justify-start gap-2 text-sm">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </aside>
  )
}