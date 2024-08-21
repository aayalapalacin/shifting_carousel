import React, { useState } from 'react'
import PropTypes from 'prop-types';

const borderTypes=["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"]


function CarouselDemo(
  {setCarouselData,
  carouselDataBackup,
  setArrowLeftBGColor, 
  setArrowLeftBorderColor,
  setArrowLeftColor,
  arrowLeftBorderColor,
  arrowLeftBGColor,
  arrowLeftColor,
  arrowLeftBorderSize,
  setArrowLeftBorderSize,

  setArrowRightBGColor, 
  setArrowRightBorderColor,
  setArrowRightColor,
  arrowRightBorderColor,
  arrowRightBGColor,
  arrowRightColor,
  arrowRightBorderSize,
  setArrowRightBorderSize,
  setLeftBorderType,
  setRightBorderType,
  } 
  ) 
{

  return (
    <div className='carousel-demo-container w-75 m-auto'>

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
        <div className='arrow-left-container justify-content-center align-items-center m-3 border border-1 p-4 input-group'>
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
          <div className='arrow-left-border-size'>
            <label htmlFor="arrow-left-border-size">Border size</label>
            <input 
              type="number"
              min="0.5" 
              step="0.5" 
              max="6" 
              className='border-input'
              value={arrowLeftBorderSize}
              onChange={(e)=> setArrowLeftBorderSize(e.target.value)}
            />
          </div>
          <div className='arrow-left-border-type'>
          <h5 className='items-title m-2'> Border Type</h5>
          <select  
            onChange={(e)=> {
                setLeftBorderType(e.target.value)
                  }
                }  
            className="form-select  border-dark" 
            aria-label="Border Type"
          >
            {borderTypes.map((border,borderIndex)=>{
              return(
                <option
                  key={borderIndex+"borderIndex"} 
                  value={border}
                >
                  {border}
                </option>                
              )
            })}
        
          </select>
          </div>
        </div>
        <div className='arrow-right-container justify-content-center align-items-center border m-3 border-1 p-4 input-group'>
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
          <div className='arrow-right-border-size'>
            <label htmlFor="arrow-right-border-size">Border size</label>
            <input 
              type="number"
              min="0.5" 
              step="0.5" 
              max="6" 
              className='border-input'
              value={arrowRightBorderSize}
              onChange={(e)=> setArrowRightBorderSize(e.target.value)}
            />
          </div>
          <div className='arrow-right-border-type'>
            <h5 className='items-title m-2'> Border Type</h5>
            <select  
              onChange={(e)=> {
                  setRightBorderType(e.target.value)
                    }
                  }  
              className="form-select  border-dark" 
              aria-label="Border Type"
            >
              {borderTypes.map((border,borderIndex)=>{
                return(
                  <option
                    key={borderIndex+"borderIndex"} 
                    value={border}
                  >
                    {border}
                  </option>
                  
                )
              })}
          
            </select>
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
  setLeftBorderType: PropTypes.func.isRequired,
  setRightBorderType: PropTypes.func.isRequired,
  arrowLeftBGColor: PropTypes.string.isRequired,
  arrowLeftColor: PropTypes.string.isRequired,
  setArrowRightBGColor: PropTypes.func.isRequired,
  setArrowRightColor: PropTypes.func.isRequired,
  setArrowRightBorderColor: PropTypes.func.isRequired,
  arrowRightBorderColor: PropTypes.string.isRequired,
  arrowRightBGColor: PropTypes.string.isRequired,
  arrowRightColor: PropTypes.string.isRequired,
  carouselDataBackup: PropTypes.array.isRequired,
  arrowLeftBorderSize: PropTypes.string.isRequired,
  setArrowLeftBorderSize: PropTypes.func.isRequired,
  arrowRightBorderSize: PropTypes.string.isRequired,
  setArrowRightBorderSize: PropTypes.func.isRequired,
};

export default CarouselDemo