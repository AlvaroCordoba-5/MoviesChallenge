import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailMovie } from "../../redux/action";
import './Detail.css'

function Detail() {
  let dispatch = useDispatch();
  let detail = useSelector((state) => state.movieDetail);
  let ur = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  console.log(detail);
   let image= ur+detail.backdrop_path
console.log(image)
  useEffect(() => {
    dispatch(detailMovie(id));
  }, [dispatch]);

  const handlesubmit=(e)=>{
    e.preventDefault()
    window.location.href = "/";
  }

  return (
    <>
      <div className="all">
      <button onClick={handlesubmit}>Back to home</button>
      <h1 style={{color:"white"}}>{detail.title}</h1>
<div className="detail">
<div className="contenedor" >
   <div className="detailcard">
      <img style={{width:"200px",margin:"30px"}} src={ur + detail.poster_path}></img>
      <h3 style={{color:"white"}}>{detail.tagline}</h3>
      <p style={{color:"white"}}>
      Genres:
      {detail.genres?detail.genres.map(e=> 
        
        <a style={{color:"white"}}> {e.name}</a>
      ):null}
      </p>

      </div>
      <div className="contimage">
      <p className="text" >{detail.overview}</p>
      <img style={{width:"600px",opacity:"0.2"}} src={ur + detail.backdrop_path}></img>
      </div>
     
    
      </div>
      </div>
      </div>
    </>
  );
}

export default Detail;
