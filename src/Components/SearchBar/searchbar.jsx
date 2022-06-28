import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/action";
import { FaSistrix } from "react-icons/fa"
import './searchbar.css'

function Searchbar() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return(
    <>
    <div className="back">
    <img  className="image" src={"https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg"}></img>
    <form className="searchbar">
                    <input type="search" className="search" size={30} placeholder='Enter your search...' value="" />
                    <button >
                        <FaSistrix size={25} className="glass" />
                    </button>
                </form>
  </div>
  
  </>
  )
}

export default Searchbar;
