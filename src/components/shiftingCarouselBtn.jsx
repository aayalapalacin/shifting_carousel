import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


export const ShiftingCarouselBtn = ({
  carouselSlide, 
  setCarouselSlide,
  carouselData,

  leftBorderType,
  rightBorderType,
  arrowLeftBorderSize,
  arrowRightBorderSize,
  leftArrowBorderColor,

  rightArrowBorderColor,
  leftArrowColor,
  leftArrowBGColor,
  rightArrowColor,
  arrowRightBGColor,
})=>{
  
    const [enlarged, setEnlarged] = useState(false);

  
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
  
    const handleBtnAnimation = () => {
      setEnlarged(true);
      setTimeout(() => setEnlarged(false), 300); // Return to normal size after 300ms
    };
  
    return(
        <span className="carousel-btn-container">
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
          className={`carousel-btn fs-3 ${enlarged ? 'englarged2' : ''}  me-5`}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideLeft());
            handleBtnAnimation();
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
          className={`carousel-btn fs-3 ${enlarged ? 'englarged1' : ''}  `}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideRight())
            handleBtnAnimation();
          }
            }
            >
                   <FontAwesomeIcon icon={faArrowRight}/> 

        </button>
      </span>
    )
}
ShiftingCarouselBtn.propTypes = {
  carouselSlide: PropTypes.string.isRequired, 
  setCarouselSlide: PropTypes.func.isRequired,
  carouselData: PropTypes.array.isRequired,

  leftBorderType: PropTypes.string.isRequired,
  rightBorderType: PropTypes.string.isRequired,
  rightArrowBorderType: PropTypes.string.isRequired,
  arrowLeftBorderSize: PropTypes.string.isRequired,
  arrowRightBorderSize: PropTypes.string.isRequired,
  rightArrowBorderColor: PropTypes.string.isRequired,
  leftArrowBorderColor: PropTypes.string.isRequired,
  
  leftArrowColor: PropTypes.string.isRequired,
  leftArrowBGColor: PropTypes.string.isRequired,
  rightArrowColor: PropTypes.string.isRequired,
  arrowRightBGColor: PropTypes.string.isRequired,
};