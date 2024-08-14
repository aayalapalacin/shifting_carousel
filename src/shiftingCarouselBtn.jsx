import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const ShiftingCarouselBtn = ({carouselSlide, setCarouselSlide,carouselData})=>{
    const [enlarged, setEnlarged] = useState(false);

  
    const handleCarouselSlideRight = () => {
      // function to make sure carousel slide index stays within [0] and [3]
      if (carouselSlide + 1 <= carouselData.length) {
        return carouselSlide + 1;
      } else {
        return 0;
      }
    };
  
    const handleCarouselSlideLeft = () => {
      // function to make sure carousel slide index stays within [0] and [-3]
      if (carouselSlide - 1 >= -carouselData.length) {
        return carouselSlide - 1;
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
          style={{marginRight:"3rem"}}j

          className={`carousel-btn ${enlarged ? 'englarged2' : ''} color-sky border-sky-2 me-5`}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideLeft());
            handleBtnAnimation();
          }}>
        <FontAwesomeIcon icon={faArrowLeft}/> 
      </button>
      
        <button
          type="button"
          className={`carousel-btn ${enlarged ? 'englarged1' : ''} color-sky border-sky-2 `}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideRight())
          
            handleBtnAnimation();
          }
            }
            >
                   <FontAwesomeIcon icon={faArrowRight}/> 

        </button>
        <h1>carousel slide: {carouselSlide}</h1>
      </span>
    )
}
