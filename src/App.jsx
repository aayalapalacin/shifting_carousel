import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShiftingCarousel from './shiftingCarousel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShiftingCarousel />
    </>
  )
}

export default App
