import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import "../../styles/shiftingCarouselBtn.css";

export const ShiftingCarouselBtn = ({
  carouselSlide, 
  setCarouselSlide,
  carouselData,
  btnCardMargin,


  leftBorderType,
  rightBorderType,
  arrowLeftBorderSize,
  arrowRightBorderSize,
  leftArrowBorderColor,
  cardHeight,
  rightArrowBorderColor,
  leftArrowColor,
  leftArrowBGColor,
  rightArrowColor,
  arrowRightBGColor,

  boxShadow,
  btnAnimation
})=>{
  
    const [marginTopCalc, setMarginTopCalc] = useState(0);

  useEffect(()=>{
    const cardBtnDistance =  17 - btnCardMargin; 

    setMarginTopCalc(cardHeight - cardBtnDistance);
  },[cardHeight, btnCardMargin]);


    const handleCarouselSlideRight = () => {
         // function to make sure carousel slide index stays within [0] and [-3]
         if (carouselSlide - 1 > -carouselData.length) {
          return carouselSlide - 1;
        } else {
          return 0;
        }
    };
   
    const handleCarouselSlideLeft = () => {
      // function to make sure carousel slide index stays within [0] and [3]
        if (carouselSlide + 1 < carouselData.length) {
          return carouselSlide + 1;
        } else {
          return 0;
        }
    };
  

  
    return(
      <>
      {carouselData && carouselData?.length > 0 ?
        <span 
          className="carousel-btn-container"
          style={{marginTop: `${marginTopCalc}rem`}}
        >
         
        <button
          type="button"
          style={{
            marginRight:"3rem",
            border:`
            ${leftBorderType ? leftBorderType : "solid"} 
            ${arrowLeftBorderSize ? arrowLeftBorderSize+"px" : "1px"} 
            ${leftArrowBorderColor ? leftArrowBorderColor : "skyblue" }`,
            color: `${leftArrowColor ? leftArrowColor : "skyblue"}`,
            backgroundColor: `${leftArrowBGColor ? leftArrowBGColor : "white"}`
          }}
          className={`carousel-btn fs-3 ${btnAnimation ? 'carouse-btn-animation' : ''} ${boxShadow ? "boxShadow" : ""}  me-5`}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideLeft());
          }}>
        <FontAwesomeIcon icon={faArrowLeft}/> 
      </button>
        <button
          type="button"
          style={{
            border:`
            ${rightBorderType ? rightBorderType : "solid"} 
            ${arrowRightBorderSize ? arrowRightBorderSize+"px" : "1px"} 
            ${rightArrowBorderColor ? rightArrowBorderColor : "skyblue" }`,
            color: `${rightArrowColor ? rightArrowColor : "skyblue"}`,
            backgroundColor: `${arrowRightBGColor ? arrowRightBGColor : "white"}`,
          }}
          carouse-btn-animation
          className={`carousel-btn fs-3 ${btnAnimation ? 'carouse-btn-animation' : ''} ${boxShadow ? "boxShadow" : ""}  `}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideRight())
          }
            }
            >
                   <FontAwesomeIcon icon={faArrowRight}/> 

        </button>
        </span>
        :
        ""
      }
      </>
    )
}
ShiftingCarouselBtn.propTypes = {
  carouselSlide: PropTypes.string.isRequired, 
  setCarouselSlide: PropTypes.func.isRequired,
  carouselData: PropTypes.array.isRequired,
  btnCardMargin: PropTypes.number.isRequired,

  leftBorderType: PropTypes.string.isRequired,
  rightBorderType: PropTypes.string.isRequired,
  rightArrowBorderType: PropTypes.string.isRequired,
  arrowLeftBorderSize: PropTypes.string.isRequired,
  arrowRightBorderSize: PropTypes.string.isRequired,
  rightArrowBorderColor: PropTypes.string.isRequired,
  leftArrowBorderColor: PropTypes.string.isRequired,
  cardHeight: PropTypes.number.isRequired,
  leftArrowColor: PropTypes.string.isRequired,
  leftArrowBGColor: PropTypes.string.isRequired,
  rightArrowColor: PropTypes.string.isRequired,
  arrowRightBGColor: PropTypes.string.isRequired,
  boxShadow: PropTypes.bool.isRequired,
};