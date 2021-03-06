import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/action";
import { FaSistrix } from "react-icons/fa";
import Stars from "../Stars/Stars";
import Swal from "sweetalert2";
import "./searchbar.css";

function Searchbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    console.log(search)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search.length>0){
    dispatch(searchMovie(search));
    setSearch("");
    }else{
      Swal.fire('Please write a movie first')
    }
    
  };

  return (
    <>
      <div className="back">
        <img
          className="image"
          src={
            "https://image.tmdb.org/t/p/w500/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
          }
          alt="img"
        ></img>
        <div className="searstar">
        <form className="searchbar">
          <input
            type="search"
            className="search"
            size={30}
            placeholder="Find your movie..."
            value={search}
            onChange={(e) => handleChange(e)} 
          />
          <button onClick={(e) => handleSubmit(e)}>
            <FaSistrix size={25} className="glass" />
          </button>
        </form>

        <Stars></Stars>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
