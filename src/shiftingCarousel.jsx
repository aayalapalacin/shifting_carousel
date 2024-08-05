import React, { useState } from "react";
import "./shiftingCarousel.css";

const playLearnCarouselData = [
  {
    carouselImg:"https://picsum.photos/id/90/200",
    carouselTitle: "Infant Classroom",
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
    carouselTitle: "test",
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
    carouselTitle: "Outdoor Area",
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
    carouselTitle: "Todddler Classroom",
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
    carouselTitle: "Preschool Classroom",
    carouselDescrtiption: (
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
    ),
  },
];

const ShiftingCarousel = () => {
  const [carouselSlide, setCarouselSlide] = useState(0);
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


  return (
    <div 
    className="carousel-container  position-relative"
    style={{position:"relative"}}
    >
      <div 
      style={{position:"relative"}}
      className="position-relative carousel-card-container">
        {playLearnCarouselData.map((carouselData, carouselDataIndex) => {
        // index 0 ,1 ,2 ,3 
        //  state = 1
        //       0 + 1 = 1 = carousel-1
        //       1 + 1 = 2 = carousel-2
        //       2 + 1 = 3 = carousel-3
        //       3 + 1 = 4 = carousel-4
          // if carouselDataIndex together with the value of carouselSlide if X, the converted value should be Y:

          //    X    Y
          //   -3 |  1
          //   -2 |  2
          //   -1 |  3
          //    0 |  0
          //    1 |  1
          //    2 |  2
          //    3 |  3
          //    4 |  0
          //    5 |  1
          //    6 |  2
          //
          let carouselClassConversion =
            carouselDataIndex + carouselSlide >= 0 &&
            carouselDataIndex + carouselSlide < 4
              ? carouselDataIndex + carouselSlide
              : carouselDataIndex + carouselSlide === 4
              ? 0
              : carouselDataIndex + carouselSlide === 5
              ? 1
              : carouselDataIndex + carouselSlide === 6
              ? 2
              : carouselDataIndex + carouselSlide === -1
              ? 3
              : carouselDataIndex + carouselSlide === -2
              ? 2
              : carouselDataIndex + carouselSlide === -3
              ? 1
              : carouselDataIndex + carouselSlide;

          return (
            <div
              key={carouselDataIndex}
              style={{position:"absolute"}}

              className={`carousel-card-container position-absolute carousel-${carouselClassConversion}
        }`}>
              <div className="carousel-card-content card ">
                <img
                  src={carouselData.carouselImg}
                  className="card-img-top"
                  alt={carouselData.carouselTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{carouselData.carouselTitle}</h5>
                  <div className="card-text">
                    {carouselData.carouselDescrtiption}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
    </div>
  );
};

export default ShiftingCarousel;