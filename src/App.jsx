import { useState } from 'react'
import './App.css'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-mono">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
