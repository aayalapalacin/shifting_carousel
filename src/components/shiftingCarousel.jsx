import React from "react";
import "../../styles/shiftingCarousel.css";
import PropTypes from 'prop-types';




const ShiftingCarousel = ({carouselSlide, carouselData, cardWidth, cardHeight, cardAnimation}) => {

  function calculateBaseValue(n) {
    // Constants based on the equation derived earlier
    const k = 4.5;
    const c = 0.05;
  
    // Calculate the base value using the equation b(n) = k / n + c
    const baseValue = (k / n) + c;
  
    return baseValue;
  }
  let carouselStylesArray = carouselData?.length > 0 ? carouselData.map((_, index) => {
    
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
      transition: `top ${cardAnimation}s, right ${cardAnimation}s, opacity ${cardAnimation}s` // Add the transition here
    };
  }): null;

  let carouselClassConversion = {};

  switch(carouselData?.length){
      case 7:
        carouselClassConversion = {
          "-6": 1, "-5": 2, "-4": 3, "-3": 4, "-2": 5, "-1": 6, "0": 0,
          "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 0, 
          "8": 1, "9": 2, "10": 3, "11": 4, "12": 5
        };
        break;
      case 6:
        carouselClassConversion={"-5":1,"-4":2,"-3":3,"-2":4,"-1":5,"0":0,
          "1":1,"2":2,"3":3,"4":4,"5":5,"6":0,"7":1,"8":2,"9":3,"10":4} 
          break;
      case 5:
        carouselClassConversion={"-4":1,"-3":2,"-2":3,"-1":4,"0":0,
          "1":1,"2":2,"3":3,"4":4,"5":0,"6":1,"7":2,"8":3}
          break;  
      case 4:
        carouselClassConversion={"-3":1,"-2":2,"-1":3,"0":0,
          "1":1,"2":2,"3":3,"4":0,"5":1,"6":2}
          break;  
      case 3:
        carouselClassConversion={"-2":1,"-1":2,"0":0,
        "1":1,"2":2,"3":0,"4":1}
        break;  
      case 2:
        carouselClassConversion={"-1":1,"0":0,
        "1":1,"2":0}
        break;  
  }

  return (
    <div 
      className="carousel-container  position-relative"
      style={{position:"relative"}}
    >
      {carouselData && carouselData?.length > 0 ?
      
      <div 
        style={{position:"relative"}}
        className="position-relative carousel-card-container">
          {carouselData.map((carouselDataItem, carouselDataIndex) => {
                          // index 0  ,1 , 2  ,3   ,4   ,5   ,6
  //   index + carousel slide:     6  ,7,  8,  9,  10  ,11  ,12
          // carousel slide state 0, 1, 2, 3, 4,5,6,
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
            //    4 |  4
            //    5 |  0
            //    6 |  1
            //    7 |  2
            //    8 |  3
            //    9 |  4
            //    10|  3
            //    11|  4
            //    12|  5
            //  

              const stylesIndex = carouselClassConversion[`${carouselDataIndex + carouselSlide}`];
              let carouselStyles= carouselStylesArray[stylesIndex]
            return (
              <div
                key={carouselDataIndex}
                style={carouselStyles}
                className={`carousel-card-container position-absolute`} 
                >
                <div 
                  className="carousel-card-content card "
                  style={{width: `${cardWidth}rem`}}
                >
                  <img
                    src={carouselDataItem.carouselImg}
                    className="card-img-top"
                    style={{height: `${cardHeight}rem`}}
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
      :
      <h1>Add data to carousel component!</h1>
    }
          

    
    </div>
  );
};


ShiftingCarousel.propTypes = {
  carouselSlide: PropTypes.string.isRequired, 
  carouselData: PropTypes.array.isRequired,
  cardWidth: PropTypes.number.isRequired,
  cardHeight: PropTypes.number.isRequired,
  cardAnimation: PropTypes.number.isRequired,

};
export default ShiftingCarousel;