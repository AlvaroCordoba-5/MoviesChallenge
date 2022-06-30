import React from 'react'
import { useState } from 'react';
import './stars.css'

const stars=[1,2,3,4,5]


function Stars() {
    const [selectedRate, setSelectedRate] = useState(null);
    const [hoveredRate, setHoveredRate] = useState(null);

const handleSubmit=(e,rate)=>{
    e.preventDefault();
    setSelectedRate(rate)
    
}
console.log("SADA",selectedRate)

  return (
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
  )
}

export default Stars