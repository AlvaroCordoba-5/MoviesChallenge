import { GET_MOVIES, SEARCH_MOVIE, MOVIE_DETAIL,FILTER_STARS
 } from "../action";
import Swal from "sweetalert2";

const initialState = {
  movies: [],
  allmovies: [],
  movieDetail: [],
  moviesByScore:[]
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        allmovies: payload,
      };
    case SEARCH_MOVIE:
      if (payload.results.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No movies with that name!",
        });

        return {
          ...state,
          movies: state.movies,
        };
      } else {
        return {
          ...state,
          movies: payload,
        };
      }
      case MOVIE_DETAIL:{
        return{
          ...state,
          movieDetail:payload
        }
      }
      case FILTER_STARS:{
        let moviesall=state.allmovies.results.filter(e=>Math.ceil(e.vote_average/2)===payload)
        console.log(moviesall)
if(moviesall.length<1){
  alert("no movies")
        return{
          ...state,
          movies:state.movies
        }
      }else{
        return{
          ...state,
          movies:moviesall
        }
      }
      }
    default:
      return state;
  }
};

export default rootReducer;
