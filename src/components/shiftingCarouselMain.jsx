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
            btnAnimationProp,

}) {

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
  "boxShadow": boxShadowProp ? boxShadowProp:true,
  "btnAnimation": btnAnimationProp ? btnAnimationProp:true


}

  return (
    <div>
     
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
        btnAnimation={carouselProps.btnAnimation}
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
            btnAnimation: PropTypes.bool.isRequired,

}
