import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShiftingCarousel from './shiftingCarousel'
import {ShiftingCarouselBtn} from './shiftingCarouselBtn'

const carouselData = [
  {
    carouselImg:"https://picsum.photos/id/90/200",
    carouselTitle: "Infant Classroom",
    carouselDescrtiption: (
      <ul>
        <li>8+ cribs for naptime</li>
        <li>8+ strollers for enjoying outdoors</li>
        <li>50+ toys promoting development</li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/200/200",
    carouselTitle: "test",
    carouselDescrtiption: (
      <ul>
        <li>8+ cribs for naptime</li>
        <li>8+ strollers for enjoying outdoors</li>
        <li>50+ toys promoting development</li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/2/200",
    carouselTitle: "Outdoor Area",
    carouselDescrtiption: (
      <ul>
        <li>
          5 large fenced in play areas designated for different age groups
        </li>
        <li>3 playground structures</li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/45/200",
    carouselTitle: "Todddler Classroom",
    carouselDescrtiption: (
      <ul>
        <li>10+ Art project supplies</li>
        <li>Sanbox used for sensory motor skills</li>
        <li>Diverse book collection</li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/67/200",
    carouselTitle: "Preschool Classroom",
    carouselDescrtiption: (
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/67/200",
    carouselTitle: "Preschool Classroom",
    carouselDescrtiption: (
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
    ),
  },
  {
    carouselImg:"https://picsum.photos/id/67/200",
    carouselTitle: "Preschool Classroom",
    carouselDescrtiption: (
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
    ),
  },
];

function App() {
  const [carouselSlide, setCarouselSlide] = useState(0);

  return (
    <div>
      <ShiftingCarousel 
        carouselData={carouselData}
        carouselSlide={carouselSlide} 
      />
      <ShiftingCarouselBtn 
        carouselData={carouselData}
        carouselSlide={carouselSlide} 
        setCarouselSlide={setCarouselSlide}
        />
    </div>
  )
}

export default App
