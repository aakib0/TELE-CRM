import Sidebar  from "./components/Sidebar"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"

function App() {
 

  return (
    <div className='flex min-h-screen'>
 <Sidebar />

<main className='flex-1 p-6 bg-gray-50'>
   <h1 className='text-2xl font-bold mb-4'> My Data</h1>
   <p>This is where cards and tables will go.</p>
   <Card>
  <CardHeader>
    <CardTitle>Hello Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is inside a shadcn Card!</p>
  </CardContent>
</Card>
</main>
    </div>
  )
}

export default App
