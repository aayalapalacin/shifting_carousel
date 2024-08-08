import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShiftingCarousel from './shiftingCarousel'
import {ShiftingCarouselBtn} from './shiftingCarouselBtn'
function App() {
  const [carouselSlide, setCarouselSlide] = useState(0);

  return (
    <>
      <ShiftingCarousel carouselSlide={carouselSlide} />
      <ShiftingCarouselBtn 
        carouselSlide={carouselSlide} 
        setCarouselSlide={setCarouselSlide}
        />
    </>
  )
}

export default App
