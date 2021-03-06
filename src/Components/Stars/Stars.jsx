import React from 'react'
import { useState } from 'react';
import './stars.css'
import { filterStars } from '../../redux/action';
import { useDispatch , useSelector} from 'react-redux';

const stars=[1,2,3,4,5]


function Stars() {
    const [selectedRate, setSelectedRate] = useState(null);
    const [hoveredRate, setHoveredRate] = useState(null);
   
    let dispatch=useDispatch()

;
  

const handleSubmit=(e,rate)=>{
    e.preventDefault();
    setSelectedRate(rate)
    dispatch(filterStars(rate))
    
}


  return (
    <div className='rating'>
      Rating:
    <div class="stars">
            {stars.map(rate => <i
              key={rate}
              className={"fas fa-star " 
              + ((rate <= selectedRate) ? 'in-rate ' : '')
              + ((rate <= hoveredRate) ? 'in-hover' : '')}
              onClick={(e) => handleSubmit(e,rate)}
              onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null);}}
              onMouseLeave={() => setHoveredRate(null)}></i>)}
          </div>
         </div>
  )
}

export default Stars