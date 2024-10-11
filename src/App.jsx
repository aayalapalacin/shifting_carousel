import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShiftingCarouselDemo from './components/shiftingCarouselDemo';
import ShiftingCarouselMain from './components/shiftingCarouselMain';

function App() {
  const carouselDataProp = [
    {
      carouselImg:"https://picsum.photos/id/90/200",
      carouselTitle: "Item 1",
      carouselDescrtiption: (
        <ul>
          <li>bitch</li>
          <li>bitch</li>
          <li>50+ toys promoting development</li>
        </ul>
      ),
    },
    {
      carouselImg:"https://picsum.photos/id/200/200",
      carouselTitle: "Item 2",
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
      carouselTitle: "Item 3",
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
      carouselTitle: "Item 4",
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
      carouselTitle: "Item 5",
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
      carouselTitle: "Item 6",
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
      carouselTitle: "Item 7",
      carouselDescrtiption: (
        <ul>
          <li>Fish Tank that is regulated daily</li>
          <li>10+ science kits</li>
          <li>Art supplies for independent </li>
        </ul>
      ),
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<ShiftingCarouselMain  carouselDataProp={carouselDataProp} />} />
      <Route path="/demo" element={<ShiftingCarouselDemo />} />
    </Routes>
  );
}

export default App;
