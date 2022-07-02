import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

function Card({image,name,title,id}) {
    
    let url="https://image.tmdb.org/t/p/w500"

  return (
    <>
    <div className='container-card'>
   <Link to={'Detail/' + id}>
    <div className='card'>
   <img style={{width:"200px",margin:"30px"}}src={url+image} alt={title}></img>
   </div>
   </Link>
   <h6 style={{color:'white'}}>{name}</h6>
   </div>
    </>
  )
}

export default Card