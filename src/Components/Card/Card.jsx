import React from 'react'
import './card.css'

function Card({image,name}) {
    
    let url="https://image.tmdb.org/t/p/w500"

  return (
    <>
    <div className='card'>
   <img style={{width:"200px",margin:"30px"}}src={url+image} alt=""></img>
   <h5 style={{color:"white"}}>{name}</h5>
   </div>
    </>
  )
}

export default Card