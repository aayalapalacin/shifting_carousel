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
  const [carouselData, setCarouselData]=useState(carouselDataBackup.slice(0,5));
 
  const [cardWidth, setCardWidth] = useState(24);
  const [cardHeight, setCardHeight] = useState(17);
  const [btnCardMargin, setBtnCardMargin] = useState(2);
  const [cardAnimation, setCardAnimation] = useState(1);

  const [arrowLeftColor, setArrowLeftColor] = useState("#000066");
  const [arrowLeftBGColor, setArrowLeftBGColor] = useState("#ccffff");

  const [arrowRightColor, setArrowRightColor] = useState("#000066");
  const [arrowRightBGColor, setArrowRightBGColor] = useState("#ccffff");

  const [arrowLeftBorderSize, setArrowLeftBorderSize] = useState("1");
  const [arrowRightBorderSize, setArrowRightBorderSize] = useState("1");
  const [arrowRightBorderColor, setArrowRightBorderColor] = useState("#000066");
  const [arrowLeftBorderColor, setArrowLeftBorderColor] = useState("#000066");
  const [leftBorderType, setLeftBorderType] = useState("solid");
  const [rightBorderType, setRightBorderType] = useState("solid");
  const [boxShadow, setBoxShadow] = useState(true);



  return (
    <div>
      <div className='title-container' style={{margin:"0rem 0rem 31rem 0rem"}}>
        <h1>Shifting Carousel</h1>
      </div>
      <ShiftingCarousel 
        carouselData={carouselData}
        carouselSlide={carouselSlide}
        cardWidth={cardWidth} 
        cardHeight={cardHeight}
        cardAnimation={cardAnimation}
      />
      <ShiftingCarouselBtn 
        carouselData={carouselData}
        carouselSlide={carouselSlide} 
        setCarouselSlide={setCarouselSlide}
        cardHeight={cardHeight} 
        btnCardMargin={btnCardMargin} 

        leftArrowBorderColor={arrowLeftBorderColor}
        rightArrowBorderColor={arrowRightBorderColor}
        leftArrowBorderType={"solid"}
        rightArrowBorderType={"solid"}
        arrowRightBorderSize={arrowRightBorderSize}
        arrowLeftBorderSize={arrowLeftBorderSize}
        leftBorderType={leftBorderType}
        rightBorderType={rightBorderType}

        
        leftArrowBGColor={arrowLeftBGColor}
        leftArrowColor={arrowLeftColor}
        rightArrowColor={arrowRightColor}
        arrowRightBGColor={arrowRightBGColor}
        boxShadow={boxShadow}
        />
        
      <CarouselDemo 
        setCarouselData={setCarouselData} 
        carouselDataBackup={carouselDataBackup}
        cardWidth={cardWidth} 
        setCardWidth={setCardWidth} 
        cardHeight={cardHeight} 
        setCardHeight={setCardHeight} 
        setBtnCardMargin={setBtnCardMargin}
        cardAnimation={cardAnimation}
        setCardAnimation={setCardAnimation}
        
        setArrowLeftBorderColor={setArrowLeftBorderColor}
        setArrowRightBorderColor={setArrowRightBorderColor}
        arrowLeftBorderColor={arrowLeftBorderColor}
        arrowRightBorderColor={arrowRightBorderColor}
        arrowLeftBorderSize={arrowLeftBorderSize}
        arrowRightBorderSize={arrowRightBorderSize}
        setArrowLeftBorderSize={setArrowLeftBorderSize}
        setArrowRightBorderSize={setArrowRightBorderSize}
        setLeftBorderType={setLeftBorderType}
        setRightBorderType={setRightBorderType}
   
       
        setArrowLeftBGColor={setArrowLeftBGColor}
        setArrowLeftColor={setArrowLeftColor}
        arrowLeftBGColor={arrowLeftBGColor}
        arrowLeftColor={arrowLeftColor}

        setArrowRightBGColor={setArrowRightBGColor}
        setArrowRightColor={setArrowRightColor}
        arrowRightBGColor={arrowRightBGColor}
        arrowRightColor={arrowRightColor}
        />
    </div>
  )
}

export default App
