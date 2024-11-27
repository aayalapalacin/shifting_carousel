import React, { useState } from 'react'
import PropTypes from 'prop-types';

const borderTypes=["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"]


function CarouselDemo(
  {setCarouselData,
  carouselDataBackup,
  cardWidth,
  setCardWidth,
  cardHeight,
  setCardHeight,
  setCardAnimation,


  setBtnCardMargin,
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

  boxShadow,
  setBoxShadow,
  btnAnimation,
  setBtnAnimation,
  } 
  ) 
{

  const[arrowStylesView, setArrowStylesView]=useState(false);
  const[cardStylesView, setCardStylesView]=useState(false);

  return (
    <div className='carousel-demo-container w-75 m-auto'>
          <div className="card-title form-check form-switch d-flex justify-content-center align-items-center">
          <h3 className='me-5'>Card Styles</h3>
          <input onChange={()=> setCardStylesView(!cardStylesView)} className="form-check-input  border-secondary" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>    
       {cardStylesView ? 
        <div className=' cardContainer border border-1 p-4 d-flex input-group justify-content-evenly align-items-center m-3'>
          <div className='card-number-items'>

            <h5 className='items-title m-2'> Number of Items</h5>
            <select  
              onChange={(e)=> {
                  setCarouselData(carouselDataBackup.slice(0,e.target.value))
                    }
                  }  
              className="form-select w-50 border-dark" 
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
          <div className='card-width me-3'>
            <label htmlFor="card-width-range" className="form-label">Card Width: {cardWidth}</label>
            <input 
              type="range" 
              min="15"
              max="45"
              value={cardWidth} 
              onChange={(e)=> setCardWidth(e.target.value)} 
              className="form-range" 
              id="card-width-range"/>
          </div>
          <div className='card-height'>
            <label htmlFor="card-height-range" className="form-label">Card Height: {cardHeight}</label>
            <input 
              type="range" 
              min="10"
              max="35"
              value={cardHeight} 
              onChange={(e)=> setCardHeight(e.target.value)} 
              className="form-range" 
              id="card-height-range"/>
          </div>
          <div className='card-arrow-margin-items'>

            <h5 className='items-title m-2'> Arrow Margin Top  </h5>
            <select  
              onChange={(e)=> {
                setBtnCardMargin(e.target.value)
                    }
                  }  
              className="form-select w-50 border-dark" 
              aria-label="Button Margin Top"
            >
              <option value={1}>1</option>
              <option value={1.5}>1.5</option>
              <option selected value={2}>2</option>
              <option value={2.5}>2.5</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='card-animations-container'>

            <h5 className='items-title m-2'> Card Transition time</h5>
            <select  
              onChange={(e)=> {
                  setCardAnimation((e.target.value))
                    }
                  }  
              className="form-select w-50 border-dark" 
              aria-label="animation select"
            >
              <option value={.75}>.75</option>
              <option selected value={1}>1</option>
              <option value={1.25}>1.25</option>
              <option value={ 1.5}>1.5</option>
              <option value={1.75}>1.75</option>
            </select> 
          </div>
        </div>
       :
       ""}   
        <div className="arrow-title form-check form-switch d-flex justify-content-center align-items-center">
          <h3 className='me-5'>Arrow Styles</h3>
          <input 
            onChange={()=> setArrowStylesView(!arrowStylesView)} 
            className="form-check-input  border-secondary" 
            type="checkbox" 
            role="switch" 
          />
        </div>    
      {arrowStylesView ? 
      <>
        <div className='arrow-left-container justify-content-center align-items-center m-3 mb-0 border border-1 p-4 input-group'>
        <div className="arrow-box-shadow form-check form-switch d-flex justify-content-center align-items-center">
          <h6 className='me-5'>Button Animation</h6>
          <input 
            onChange={()=> setBtnAnimation(!btnAnimation)} 
            className="form-check-input  border-secondary" 
            type="checkbox" 
            role="switch" 
            checked={btnAnimation ? true : false}
          />
        </div>   
        <div className="arrow-box-shadow form-check form-switch d-flex justify-content-center align-items-center">
          <h6 className='me-5'>Box Shadow</h6>
          <input 
            onChange={()=> setBoxShadow(!boxShadow)} 
            className="form-check-input  border-secondary" 
            type="checkbox" 
            role="switch"
            checked={boxShadow ? true : false}
          />
        </div>   
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
          <div className='arrow-box-shadow'>

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
      </>
      : 
      ""}    
    </div>
  )
}

CarouselDemo.propTypes = {
  
  setCarouselData: PropTypes.func.isRequired,
  cardWidth: PropTypes.number.isRequired,
  setCardWidth: PropTypes.func.isRequired,
  cardHeight: PropTypes.number.isRequired,
  setCardHeight: PropTypes.func.isRequired,
  
  setBtnCardMargin: PropTypes.func.isRequired,
  setCardAnimation: PropTypes.func.isRequired,

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
  boxShdow: PropTypes.bool.isRequired,
  setBoxShadow: PropTypes.func.isRequired,
};

export default CarouselDemo
