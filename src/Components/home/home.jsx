import React, { useEffect } from "react";
import Card from "../Card/Card.jsx";
import Searchbar from "../SearchBar/searchbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/action";
import Stars from "../Stars/Stars.jsx";
import './home.css'

function Home() {
  const dispatch = useDispatch();
  let movies = useSelector((state) => state.movies);
  let filter= useSelector((state)=>state.moviesByScore)
  console.log(movies)
console.log(filter)
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
    <Searchbar></Searchbar>
    <Stars></Stars>
    <div className="containerall">
      <div className="container">
        
      {movies?
        movies?.results
          ? movies?.results.map((e) =>
           <Card 
           key={e.id}
           image={e.poster_path}
           name={e.title}
           title={e.title}
           id={e.id}
           />)
           :
           movies?.map((e) =>
            <Card 
            key={e.id}
            image={e.poster_path}
            name={e.title}
            title={e.title}
            id={e.id}
            />)
            
           :null
        }
      </div>
      </div>
    </>
  );
}

export default Home;
