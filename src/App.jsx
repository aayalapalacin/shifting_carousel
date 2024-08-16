import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShiftingCarousel from './shiftingCarousel'
import {ShiftingCarouselBtn} from './shiftingCarouselBtn'

const carouselDataBackup = [
  {
    carouselImg:"https://picsum.photos/id/90/200",
    carouselTitle: "Item 1",
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
    carouselTitle: "Item 2",
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
    carouselTitle: "Item 3",
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
    carouselTitle: "Item 4",
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
    carouselTitle: "Item 5",
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
    carouselTitle: "Item 6",
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
    carouselTitle: "Item 7",
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
  const [numberOfItems,setNumberOfItems]=useState(5);
  const [carouselData, setCarouselData]=useState(carouselDataBackup.slice(0,5));

  return (
    <div>
      <div className='title-container' style={{margin:"18rem 0rem 11rem 0rem"}}>
        <h1>Shifting Carousel</h1>
      </div>
      <ShiftingCarousel 
        carouselData={carouselData}
        carouselSlide={carouselSlide} 
      />
      <ShiftingCarouselBtn 
        carouselData={carouselData}
        carouselSlide={carouselSlide} 
        setCarouselSlide={setCarouselSlide}
        />
        
    
        <div className='d-flex justify-content-center align-items-center m-3'>
          <h5 className='items-title m-2'> Number of Items</h5>
          <select  
            onChange={(e)=> {
                setNumberOfItems(e.target.value)
                setCarouselData(carouselDataBackup.slice(0,e.target.value))
                  }
                }  
            className="form-select w-25 border-dark" 
            aria-label="Default select example"
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option selected value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
    </div>
  )
}

export default App
