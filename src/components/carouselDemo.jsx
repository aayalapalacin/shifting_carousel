import React, { useState } from 'react'
import PropTypes from 'prop-types';


function CarouselDemo(
  {setCarouselData,
  carouselDataBackup,
  setArrowLeftBGColor, 
  setArrowLeftBorderColor,
  setArrowLeftColor,
  arrowLeftBorderColor,
  arrowLeftBGColor,
  arrowLeftColor,
  setArrowRightBGColor, 
  setArrowRightBorderColor,
  setArrowRightColor,
  arrowRightBorderColor,
  arrowRightBGColor,
  arrowRightColor,
  } 
  ) 
{

  return (
    <div>

        <div className=' border border-1 p-4 d-flex input-group justify-content-center align-items-center m-3'>
          <h5 className='items-title m-2'> Number of Items</h5>
          <select  
            onChange={(e)=> {
                setCarouselData(carouselDataBackup.slice(0,e.target.value))
                  }
                }  
            className="form-select w-25 border-dark" 
            aria-label="Default select example"
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option selected value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
        <div className='arrow-left-container m-3 border border-1 p-4 input-group'>
          <div className="arrow-left-color d-flex m-3">
                <label className='me-2'  htmlFor="arrow-left-color">Arrow Left Color</label>
                <input 
                  type="color" 
                  onChange={(e)=> setArrowLeftColor(e.target.value) } 
                  value={arrowLeftColor} 
                  id="arrow-left-color" 
                />
          </div>
          <div className='arrow-left-border-color d-flex m-3'>
              <label className='me-2' htmlFor='arrow-left-border'>Arrow Left Border Color</label>
              <input 
                type="color" 
                onChange={(e)=> setArrowLeftBorderColor(e.target.value) } 
                value={arrowLeftBorderColor} 
                id='arrow-left-border'
              />
          </div>

          <div className='arrow-left-bg-color d-flex m-3'>
            <label className='me-2' htmlFor='arrow-left-bg-color'>Arrow Left BG Color</label>
            <input 
              type="color" 
              value={arrowLeftBGColor} 
              onChange={(e)=> setArrowLeftBGColor(e.target.value) } 
              id='arrow-left-bg-color'
            />
          </div>

        </div>
        <div className='arrow-right-container border m-3 border-1 p-4 input-group'>
          <div className="arrow-right-color d-flex m-3">
                <label className='me-2'  htmlFor="arrow-right-color">Arrow Right Color</label>
                <input 
                  type="color" 
                  onChange={(e)=> setArrowRightColor(e.target.value) } 
                  value={arrowRightColor} 
                  id="arrow-right-color" 
                />
          </div>
          <div className='arrow-right-border-color d-flex m-3'>
              <label className='me-2' htmlFor='arrow-right-border'>Arrow Right Border Color</label>
              <input 
                type="color" 
                onChange={(e)=> setArrowRightBorderColor(e.target.value) } 
                value={arrowRightBorderColor} 
                id='arrow-right-border'
              />
          </div>

          <div className='arrow-right-bg-color d-flex m-3'>
            <label className='me-2' htmlFor='arrow-right-bg-color'>Arrow Right BG Color</label>
            <input 
              type="color" 
              value={arrowRightBGColor} 
              onChange={(e)=> setArrowRightBGColor(e.target.value) } 
              id='arrow-right-bg-color'
            />
          </div>

        </div>
    </div>
  )
}

CarouselDemo.propTypes = {
  setCarouselData: PropTypes.func.isRequired,
  setArrowLeftBGColor: PropTypes.func.isRequired,
  setArrowLeftColor: PropTypes.func.isRequired,
  setArrowLeftBorderColor: PropTypes.func.isRequired,
  arrowLeftBorderColor: PropTypes.string.isRequired,
  arrowLeftBGColor: PropTypes.string.isRequired,
  arrowLeftColor: PropTypes.string.isRequired,
  setArrowRightBGColor: PropTypes.func.isRequired,
  setArrowRightColor: PropTypes.func.isRequired,
  setArrowRightBorderColor: PropTypes.func.isRequired,
  arrowRightBorderColor: PropTypes.string.isRequired,
  arrowRightBGColor: PropTypes.string.isRequired,
  arrowRightColor: PropTypes.string.isRequired,
  carouselDataBackup: PropTypes.array.isRequired,
};

export default CarouselDemo
