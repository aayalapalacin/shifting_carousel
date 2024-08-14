import React from "react";
import "./shiftingCarousel.css";



const ShiftingCarousel = ({carouselSlide, carouselData}) => {

  function calculateBaseValue(n) {
    // Constants based on the equation derived earlier
    const k = 4.5;
    const c = 0.05;
  
    // Calculate the base value using the equation b(n) = k / n + c
    const baseValue = (k / n) + c;
  
    return baseValue;
  }
  let carouselStylesArray = carouselData.length > 0 ? carouselData.map((_, index) => {
    
    const baseSpacing = calculateBaseValue(carouselData.length);
    
    const top = `-${index * baseSpacing}rem`;
    const right = `-${index * baseSpacing * 1.4}rem`;
    const opacity = `${1 - index * 0.1}`;
    const zIndex = `${carouselData.length - index}`;
    
    return {
      top,
      right,
      zIndex,
      opacity,
    };
  }): null;
  

  return (
    <div 
    className="carousel-container  position-relative"
    style={{position:"relative"}}
    >
      <div 
      style={{position:"relative"}}
      className="position-relative carousel-card-container">
        {carouselData.map((carouselDataItem, carouselDataIndex) => {
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
            carouselDataIndex + carouselSlide <= carouselStylesArray.length
              ? carouselStylesArray[carouselDataIndex + carouselSlide]
              : carouselDataIndex + carouselSlide === 4
              ? carouselStylesArray[0]
              : carouselDataIndex + carouselSlide === 5
              ? carouselStylesArray[1]
              : carouselDataIndex + carouselSlide === 6
              ? carouselStylesArray[2]
              : carouselDataIndex + carouselSlide === -1
              ? carouselStylesArray[3]
              : carouselDataIndex + carouselSlide === -2
              ? carouselStylesArray[2]
              : carouselDataIndex + carouselSlide === -3
              ? carouselStylesArray[1]
              : carouselStylesArray[carouselDataIndex + carouselSlide];
            console.log(carouselStylesArray,"array");
            console.log(carouselData,carouselData.length,"data")
            console.log("sum",carouselDataIndex + carouselSlide)
          return (
            <div
              key={carouselDataIndex}
              style={carouselClassConversion}
              className={`carousel-card-container position-absolute`} 
              >
              <div className="carousel-card-content card ">
                <img
                  src={carouselDataItem.carouselImg}
                  className="card-img-top"
                  alt={carouselDataItem.carouselTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{carouselDataItem.carouselTitle}</h5>
                  <div className="card-text">
                    {carouselDataItem.carouselDescrtiption}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    
    </div>
  );
};

export default ShiftingCarousel;