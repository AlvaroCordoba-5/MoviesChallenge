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
      <h1 style={{color:"white"}}>{detail.title}</h1>
      <h3 style={{color:"white"}}>{detail.tagline}</h3>
      <p style={{color:"white"}}>{detail.overview}</p>
      <a href={detail.homepage} target="_blank">
        {detail.homepage}
      </a>
      {detail.genres?detail.genres.map(e=> <ul>
        <li style={{color:"white"}}>{e.name}</li>
      </ul>):null}

      <img src={ur + detail.poster_path}></img>
      <img style={{ opacity:"0.2"}} src={ur + detail.backdrop_path}></img>
      </div>
    </>
  );
}

export default Detail;
