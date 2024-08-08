import React, {useState} from 'react'

export const ShiftingCarouselBtn = ({carouselSlide, setCarouselSlide})=>{
    const [enlarged, setEnlarged] = useState(false);

  
    const handleCarouselSlideRight = () => {
      // function to make sure carousel slide index stays within [0] and [3]
      if (carouselSlide + 1 < 4) {
        return carouselSlide + 1;
      } else {
        return 0;
      }
    };
  
    const handleCarouselSlideLeft = () => {
      // function to make sure carousel slide index stays within [0] and [-3]
      if (carouselSlide - 1 > -4) {
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
          style={{marginRight:"3rem"}}

          className={`carousel-btn ${enlarged ? 'englarged2' : ''} color-sky border-sky-2 me-5`}
          onClick={() => {
            setCarouselSlide(handleCarouselSlideLeft());
            handleBtnAnimation();
          }}>
        <i class="bi bi-arrow-left-circle-fill"></i> 
        left
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
              right
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </span>
    )
}
