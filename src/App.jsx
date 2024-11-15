import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Appbar } from './components/Appbar'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Route, Router } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='flex w-screen h-screen overflow-hidden'>
        <div className='bg-[#1E2640] w-[17rem]'>
          <Sidebar/>
        </div>
        <div className='flex flex-col w-full h-full bg-white'>
          <Appbar/>
          <Dashboard/>
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App
