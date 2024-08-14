import React from "react";
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

// let carouselStylesArray =[
//   {
//     top: "0rem",
//     left: "0rem",
//     zIndex: "4",
//     opacity: "1",
//   }
  
//   ,
//   {
//     top: `-${playLearnCarouselData.length * .2}rem`,
//     left: `${playLearnCarouselData.length * .28}rem`,
//     zIndex: "3",
//     opacity: "0.8",
// }

// , 
// {
//   top: `-${playLearnCarouselData.length * .42}rem`,
//   left: `${playLearnCarouselData.length * .56}rem`,
//   opacity: "0.6",
//   zIndex: "2",
// }

// , {
//   top: `-${playLearnCarouselData.length * .62}rem`,
//   left: `${playLearnCarouselData.length * .84}rem`,
//   opacity: "0.4",
//   zIndex: "1",
// }

// , {
//   top: `-${playLearnCarouselData.length*.8}rem`,
//   left: `${playLearnCarouselData.length * 1.1}rem`,
//   opacity: "0.2",
//   zIndex: "0",
// }
// ]
function calculateBaseValue(n) {
  // Constants based on the equation derived earlier
  const k = 4.5;
  const c = 0.05;

  // Calculate the base value using the equation b(n) = k / n + c
  const baseValue = (k / n) + c;

  return baseValue;
}
let carouselStylesArray = playLearnCarouselData.map((_, index) => {
  
  const baseSpacing = calculateBaseValue(playLearnCarouselData.length);
  // 6 items base = 0.8
  // 5 item base = 1
  // 4 items base =1.2
  // 3 items base = 1.5
  // 2 items base = 2.3
  const top = `-${index * baseSpacing}rem`;
  const right = `-${index * baseSpacing * 1.4}rem`;
  const opacity = `${1 - index * 0.1}`;
  const zIndex = `${playLearnCarouselData.length - index}`;
  
  return {
    top,
    right,
    zIndex,
    opacity,
  };
});

const ShiftingCarousel = ({carouselSlide}) => {


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
            carouselDataIndex + carouselSlide < 6
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

          return (
            <div
              key={carouselDataIndex}
              style={carouselClassConversion}
              className={`carousel-card-container position-absolute`} 
              >
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

    
    </div>
  );
};

export default ShiftingCarousel;