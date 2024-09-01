import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShiftingCarouselDemo from './components/shiftingCarouselDemo';
import ShiftingCarouselMain from './components/shiftingCarouselMain';

function App() {
  return (
    // <>
    // <ShiftingCarouselMain />
    // </>
    <Routes>
      <Route path="/" element={<ShiftingCarouselMain />} />
      <Route path="/demo" element={<ShiftingCarouselDemo />} />
    </Routes>
  );
}

export default App;
