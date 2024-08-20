import { useState } from 'react'

import '../styles/App.css'
import ShiftingCarousel from './components/shiftingCarousel'
import {ShiftingCarouselBtn} from './components/shiftingCarouselBtn'
import CarouselDemo from './components/carouselDemo';

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
  const [arrowLeftColor, setArrowLeftColor] = useState("#000066");
  const [arrowLeftBorderColor, setArrowLeftBorderColor] = useState("#000066");
  const [arrowLeftBGColor, setArrowLeftBGColor] = useState("#ccffff");
  const [arrowRightColor, setArrowRightColor] = useState("#000066");
  const [arrowRightBorderColor, setArrowRightBorderColor] = useState("#000066");
  const [arrowRightBGColor, setArrowRightBGColor] = useState("#ccffff");
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
        arrowSpic
        leftArrowBorderType={"solid"}
        leftArrowBorderSize={"2px"}
        leftArrowBGColor={arrowLeftBGColor}
        leftArrowBorderColor={arrowLeftBorderColor}
        leftArrowColor={arrowLeftColor}
        rightArrowBorderType={"solid"}
        rightArrowBorderSize={"2px"}
        rightArrowBorderColor={arrowRightBorderColor}
        rightArrowColor={arrowRightColor}
        arrowRightBGColor={arrowRightBGColor}
        />
      <CarouselDemo 
        setCarouselData={setCarouselData} 
        carouselDataBackup={carouselDataBackup}
        setArrowLeftBorderColor={setArrowLeftBorderColor}
        setArrowLeftBGColor={setArrowLeftBGColor}
        setArrowLeftColor={setArrowLeftColor}
        arrowLeftBorderColor={arrowLeftBorderColor}
        arrowLeftBGColor={arrowLeftBGColor}
        arrowLeftColor={arrowLeftColor}
        setArrowRightBorderColor={setArrowRightBorderColor}
        setArrowRightBGColor={setArrowRightBGColor}
        setArrowRightColor={setArrowRightColor}
        arrowRightBorderColor={arrowRightBorderColor}
        arrowRightBGColor={arrowRightBGColor}
        arrowRightColor={arrowRightColor}
        />
    </div>
  )
}

export default App
