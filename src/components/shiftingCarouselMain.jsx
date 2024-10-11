import { useState } from 'react'
import PropTypes from 'prop-types';
import '../../styles/App.css'
import ShiftingCarousel from '../components/shiftingCarousel'

import {ShiftingCarouselBtn} from '../components/shiftingCarouselBtn'


function ShiftingCarouselMain({
  carouselDataProp,
  cardWidthProp,
  cardHeightProp,
  btnCardMarginProp,
  cardAnimationProp,
  arrowLeftColorProp,
  arrowLeftBGColorProp,
  arrowRightColorProp,
  arrowRightBGColorProp,
  arrowLeftBorderSizeProp,
  arrowRightBorderSizeProp,
  arrowRightBorderColorProp,
arrowLeftBorderColorProp ,
       leftBorderTypeProp,
     rightBorderTypeProp ,
            boxShadowProp,

}) {
//   const carouselDataBackup = [
//     {
//       carouselImg:"https://picsum.photos/id/90/200",
//       carouselTitle: "Item 1",
//       carouselDescrtiption: (
//         <ul>
//           <li>8+ cribs for naptime</li>
//           <li>8+ strollers for enjoying outdoors</li>
//           <li>50+ toys promoting development</li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/200/200",
//       carouselTitle: "Item 2",
//       carouselDescrtiption: (
//         <ul>
//           <li>8+ cribs for naptime</li>
//           <li>8+ strollers for enjoying outdoors</li>
//           <li>50+ toys promoting development</li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/2/200",
//       carouselTitle: "Item 3",
//       carouselDescrtiption: (
//         <ul>
//           <li>
//  5 large fenced in play areas designated for different age groups
//           </li>
//           <li>3 playground structures</li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/45/200",
//       carouselTitle: "Item 4",
//       carouselDescrtiption: (
//         <ul>
//           <li>10+ Art project supplies</li>
//           <li>Sanbox used for sensory motor skills</li>
//           <li>Diverse book collection</li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/67/200",
//       carouselTitle: "Item 5",
//       carouselDescrtiption: (
//         <ul>
//           <li>Fish Tank that is regulated daily</li>
//           <li>10+ science kits</li>
//           <li>Art supplies for independent </li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/67/200",
//       carouselTitle: "Item 6",
//       carouselDescrtiption: (
//         <ul>
//           <li>Fish Tank that is regulated daily</li>
//           <li>10+ science kits</li>
//           <li>Art supplies for independent </li>
//         </ul>
//       ),
//     },
//     {
//       carouselImg:"https://picsum.photos/id/67/200",
//       carouselTitle: "Item 7",
//       carouselDescrtiption: (
//         <ul>
//           <li>Fish Tank that is regulated daily</li>
//           <li>10+ science kits</li>
//           <li>Art supplies for independent </li>
//         </ul>
//       ),
//     },
//   ];

  const [carouselSlide, setCarouselSlide] = useState(0);
 const carouselProps ={
  "carouselData": carouselDataProp ? carouselDataProp.slice(0,5) : "",
 
  "cardWidth": cardWidthProp ? cardWidthProp:24,
  "cardHeight": cardHeightProp? cardHeightProp: 17,
  "btnCardMargin": btnCardMarginProp  ? btnCardMarginProp  : 2,
  "cardAnimation": cardAnimationProp  ? cardAnimationProp  : 1,

  "arrowLeftColor": arrowLeftColorProp ? arrowLeftColorProp :"#000066",
  "arrowLeftBGColor": arrowLeftBGColorProp ? arrowLeftBGColorProp : "#ccffff",

  "arrowRightColor": arrowRightColorProp  ? arrowRightColorProp  : "#000066",
  "arrowRightBGColor": arrowRightBGColorProp? arrowRightBGColorProp:"#ccffff",

  "arrowLeftBorderSize": arrowLeftBorderSizeProp   ? arrowLeftBorderSizeProp  :  "1",
  "arrowRightBorderSize": arrowRightBorderSizeProp  ? arrowRightBorderSizeProp :"1",
  "arrowRightBorderColor": arrowRightBorderColorProp ? arrowRightBorderColorProp:"#000066",
  "arrowLeftBorderColor": arrowLeftBorderColorProp  ? arrowLeftBorderColorProp :"#000066",
  "leftBorderType": leftBorderTypeProp ? leftBorderTypeProp :"solid",
  "rightBorderType": rightBorderTypeProp  ? rightBorderTypeProp  : "solid",
  "boxShadow": boxShadowProp ? boxShadowProp:true

}

  return (
    <div>
      <div className='title-container' style={{margin:"0rem 0rem 31rem 0rem"}}>
        <h1>Shifting Carousel</h1>
      </div>
      <ShiftingCarousel
        carouselData={carouselProps.carouselData}
        carouselSlide={carouselSlide}
        cardWidth={carouselProps.cardWidth} 
        cardHeight={carouselProps.cardHeight}
        cardAnimation={carouselProps.cardAnimation}
      />
      
      <ShiftingCarouselBtn 
        carouselData={carouselProps.carouselData}
        carouselSlide={carouselSlide} 
        setCarouselSlide={setCarouselSlide}
        cardHeight={carouselProps.cardHeight} 
        btnCardMargin={carouselProps.btnCardMargin} 

        leftArrowBorderColor={carouselProps.arrowLeftBorderColor}
        rightArrowBorderColor={carouselProps.arrowRightBorderColor}
        leftArrowBorderType={carouselProps.leftBorderType}
        rightArrowBorderType={carouselProps.rightBorderType}
        arrowRightBorderSize={carouselProps.arrowRightBorderSize}
        arrowLeftBorderSize={carouselProps.arrowLeftBorderSize}
        leftBorderType={carouselProps.leftBorderType}
        rightBorderType={carouselProps.rightBorderType}

        
        leftArrowBGColor={carouselProps.arrowLeftBGColor}
        leftArrowColor={carouselProps.arrowLeftColor}
        rightArrowColor={carouselProps.arrowRightColor}
        arrowRightBGColor={carouselProps.arrowRightBGColor}
        boxShadow={carouselProps.boxShadow}
        />
        
       
    </div>
  )
}

export default ShiftingCarouselMain
ShiftingCarouselMain.propTypes = {
  carouselDataBackup: PropTypes.array.isRequired, 
  carouselDataProp: PropTypes.array.isRequired,
  cardWidthProp: PropTypes.number.isRequired,
  cardHeightProp: PropTypes.number.isRequired,
  btnCardMarginProp: PropTypes.number.isRequired,
  cardAnimationProp: PropTypes.number.isRequired,
  arrowLeftColorProp: PropTypes.string.isRequired,
  arrowLeftBGColorProp: PropTypes.string.isRequired,
  arrowRightColorProp: PropTypes.string.isRequired,
  arrowRightBGColorProp: PropTypes.string.isRequired,
  arrowLeftBorderSizeProp: PropTypes.string.isRequired,
  arrowRightBorderSizeProp: PropTypes.string.isRequired,
  arrowRightBorderColorProp: PropTypes.string.isRequired,
arrowLeftBorderColorProp : PropTypes.string.isRequired,
       leftBorderTypeProp: PropTypes.string.isRequired,
     rightBorderTypeProp : PropTypes.string.isRequired,
            boxShadowProp: PropTypes.bool.isRequired,

}
