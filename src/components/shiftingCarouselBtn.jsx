import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const ShiftingCarouselBtn = ({
  carouselSlide, 
  setCarouselSlide,
  carouselData,
  leftArrowBorderType,
  leftArrowBorderSize,
  leftArrowBorderColor,
  leftArrowColor,
  rightArrowBorderType,
  rightArrowBorderSize,
  rightArrowBorderColor,
  rightArrowColor,
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
            ${leftArrowBorderType ? leftArrowBorderType : "solid"} 
            ${leftArrowBorderSize ? leftArrowBorderSize : "1.5px"} 
            ${leftArrowBorderColor ? leftArrowBorderColor : "skyblue" }`,
            color: `${leftArrowColor ? leftArrowColor : "skyblue"}`
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
            marginRight:"3rem",
            border:`
            ${rightArrowBorderType ? rightArrowBorderType : "solid"} 
            ${rightArrowBorderSize ? rightArrowBorderSize : "1.5px"} 
            ${rightArrowBorderColor ? rightArrowBorderColor : "skyblue" }`,
            color: `${rightArrowColor ? rightArrowColor : "skyblue"}`
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
