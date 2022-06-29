import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/action";
import { FaSistrix } from "react-icons/fa";
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
      alert("enter a movie")
    }
    
  };

  return (
    <>
      <div className="back">
        <img
          className="image"
          src={
            "https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg"
          }
        ></img>
        <form className="searchbar">
          <input
            type="search"
            className="search"
            size={30}
            placeholder="Enter your search..."
            value={search}
            onChange={(e) => handleChange(e)} 
          />
          <button onClick={(e) => handleSubmit(e)}>
            <FaSistrix size={25} className="glass" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
