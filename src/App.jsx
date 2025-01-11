import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShiftingCarouselDemo from './components/shiftingCarouselDemo';
import ShiftingCarouselMain from './components/shiftingCarouselMain';

function App() {
  const carouselDataProp = [
    {
      carouselImg: "https://picsum.photos/id/101/200",
      carouselTitle: "Dynamic Stacking",
      carouselDescrtiption: (
        <ul>
          <li>Automatically positions cards in a visually appealing stack</li>
          <li>Works with any number of cards </li>
          <li>Adjusts dynamically to the size of the container</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/102/200",
      carouselTitle: "Customizable Card Styles",
      carouselDescrtiption: (
        <ul>
          <li>Easily set card width and height</li>
          <li>Supports custom images, text, and more</li>
          <li>Works seamlessly with your CSS</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/103/200",
      carouselTitle: "Interactive Navigation",
      carouselDescrtiption: (
        <ul>
          <li>Arrow buttons for cycling through cards</li>
          <li>Fully customizable arrow colors and styles</li>
          <li>Smooth animations for a polished look</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/104/200",
      carouselTitle: "Animation Options",
      carouselDescrtiption: (
        <ul>
          <li>Define transition timing for animations</li>
          <li>Control the smoothness of card movement</li>
          <li>Customize hover and click animations</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/110/200",
      carouselTitle: "Responsive Design",
      carouselDescrtiption: (
        <ul>
          <li>Adapts to different screen sizes</li>
          <li>Maintains visual integrity on mobile and desktop</li>
          <li>Perfect for modern, responsive UIs</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/106/200",
      carouselTitle: "Simple Setup",
      carouselDescrtiption: (
        <ul>
          <li>Predefined default values for quick implementation</li>
          <li>Only requires minimal configuration</li>
          <li>Ready to use out of the box</li>
        </ul>
      ),
    },
    {
      carouselImg: "https://picsum.photos/id/107/200",
      carouselTitle: "Customizable Arrow Borders",
      carouselDescrtiption: (
        <ul>
          <li>Adjust border size, color, and type</li>
          <li>Supports individual left and right customization</li>
          <li>Adds a professional touch to your carousel</li>
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
