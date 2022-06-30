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
      <button onClick={handlesubmit}>Back to home</button>

<div className="container" >
   <div className="detailcard">
      <h1 style={{color:"white"}}>{detail.title}</h1>
      <img style={{width:"200px",margin:"30px"}} src={ur + detail.poster_path}></img>
      <h3 style={{color:"white"}}>{detail.tagline}</h3>
      {detail.genres?detail.genres.map(e=> <ul>
        <li style={{color:"white"}}>{e.name}</li>
      </ul>):null}

      <a href={detail.homepage} target="_blank">
        {detail.homepage}
      </a>
      </div>
      <div className="contimage">
      <p className="text" >{detail.overview}</p>
      <img style={{ opacity:"0.2"}} src={ur + detail.backdrop_path}></img>
      </div>
     
    
      
      </div>
    </>
  );
}

export default Detail;
