import React, { useEffect } from "react";
import Card from "../Card/Card.jsx";
import Searchbar from "../SearchBar/searchbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/action";

import './home.css'

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  console.log(movies.results)

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
    <Searchbar></Searchbar>
    <div className="containerall">
      <div className="container">
        {movies.results
          ? movies.results.map((e) =>
           <Card 
           image={e.poster_path}
           name={e.title}
           />)
          : null}
      </div>
      </div>
    </>
  );
}

export default Home;
