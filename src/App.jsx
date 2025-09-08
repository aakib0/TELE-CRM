import React, { useEffect, useMemo, useState } from "react"
import Sidebar from "./components/Sidebar"
import { Checkbox } from "./components/ui/checkbox"
import { Skeleton } from "./components/ui/skeleton"

function makeRows(count = 37) {
  const statuses = ["In Process", "Done"]
  const rows = []
  for (let i = 1; i <= count; i++) {
    rows.push({
      id: i,
      name: `Document_${i}.xlsx`,
      date: `Jan ${Math.ceil(i / 2)}, 2024`,
      status: statuses[i % 2],
      records: Math.floor(Math.random() * 100),
      limit: Math.floor(Math.random() * 20),
      reviewer: i % 3 === 0 ? "Priya Sharma" : "Amit Singh",
    })
  }
  return rows
}

export default function App() {
  
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [rows] = useState(() => makeRows(37)) 
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  const totalRows = rows.length
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage))

 
  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [rowsPerPage, totalPages, page])

  const visibleRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    return rows.slice(start, start + rowsPerPage)
  }, [rows, page, rowsPerPage])

  
  function toggleRow(id) {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function toggleSelectAllVisible() {
    const visibleIds = visibleRows.map((r) => r.id)
    const allSelected = visibleIds.every((id) => selectedIds.has(id))
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (allSelected) {
        visibleIds.forEach((id) => next.delete(id))
      } else {
        visibleIds.forEach((id) => next.add(id))
      }
      return next
    })
  }

  const allVisibleSelected = visibleRows.length > 0 && visibleRows.every((r) => selectedIds.has(r.id))
  const someVisibleSelected = visibleRows.some((r) => selectedIds.has(r.id))


  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((v) => !v)} active="mydata" />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-4 py-3 border-b bg-white">
          <div className="flex items-center gap-3">
            
            <button
              onClick={() => setSidebarCollapsed((v) => !v)}
              className="rounded p-2 hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              
              {sidebarCollapsed ? "»" : "«"}
            </button>
            <h1 className="text-lg font-semibold">My Data</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="round  bg-white text-black font-semibold px-3 py-1 text-sm">Quick Create</button>
          </div>
        </header>

        <main className="p-6 space-y-6 overflow-auto">
          
          {loading ? (
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-lg bg-white p-4 shadow">
                  <Skeleton className="h-6 w-36 mb-2" />
                  <Skeleton className="h-10 w-24 mb-2" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>
          ) : (
         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-600">Pending Tasks</div>
                  <div></div>
                </div>
                <div className="mt-3 text-3xl font-bold">85</div>
                <div className="text-xs text-gray-500 mt-2">Down 15% this month</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-600">Total Records</div>
                  <div></div>
                </div>
                <div className="mt-3 text-3xl font-bold">3580</div>
                <div className="text-xs text-gray-500 mt-2">20% increase this month</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-600">Weekly Prospects</div>
                  <div></div>
                </div>
                <div className="mt-3 text-3xl font-bold">200</div>
                <div className="text-xs text-gray-500 mt-2">Up 15% this month</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-600">Hot Leads</div>
                  <div></div>
                </div>
                <div className="mt-3 text-3xl font-bold">80</div>
                <div className="text-xs text-gray-500 mt-2">Strong user retention</div>
              </div>
            </div>
          )}

         
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-full bg-white border text-sm">Outline</button>
            <button className="px-3 py-1 rounded-full bg-white border text-sm">Past Performance</button>
            <button className="px-3 py-1 rounded-full bg-white border text-sm">Key Personnel</button>
            <button className="px-3 py-1 rounded-full bg-white border text-sm">Focus Documents</button>
          </div>

          <div className="bg-white rounded-lg shadow border overflow-x-auto">
            {loading ? (
             
              <div className="p-6 space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                ))}
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">
                      <Checkbox
                        checked={allVisibleSelected}
                        onCheckedChange={toggleSelectAllVisible}
                        aria-label="Select all visible"
                      />
                    </th>
                    <th className="p-2 text-left">Header</th>
                    <th className="p-2 text-left">Created Date</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Records</th>
                    <th className="p-2 text-left">Limit</th>
                    <th className="p-2 text-left">Reviewer</th>
                  </tr>
                </thead>

                <tbody>
                  {visibleRows.map((r) => (
                    <tr key={r.id} className="border-t">
                      <td className="p-2">
                       
                        <Checkbox
                          checked={selectedIds.has(r.id)}
                          onCheckedChange={() => toggleRow(r.id)}
                          aria-label={`Select row ${r.id}`}
                        />
                      </td>
                      <td className="p-2">{r.name}</td>
                      <td className="p-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs">
                          {r.date}
                        </span>
                      </td>
                      <td className="p-2">{r.status}</td>
                      <td className="p-2">{r.records}</td>
                      <td className="p-2">{r.limit}</td>
                      <td className="p-2">{r.reviewer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* PAGINATION */}
          {/* <div className="flex items-center justify-between text-sm text-gray-600">
            <div>{selectedIds.size} of {totalRows} row(s) selected</div>

            <div className="flex items-center gap-3">
              <div>Rows per page:</div>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value))
                  setPage(1) =
                }}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>

              <div>Page {page} of {totalPages}</div>

              <button
                className="p-1 rounded hover:bg-gray-100"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                Prev
              </button>

              <button
                className="p-1 rounded hover:bg-gray-100"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div> */}
          {/* </div> */}
        </main>
      </div>
    </div>
  )
}
