import axios from "axios";

export const GET_MOVIES="GET_MOVIES"
export const SEARCH_MOVIE="SEARCH_MOVIE"
export const MOVIE_DETAIL="MOVIE_DETAIL "
export const FILTER_STARS="FILTER_STARS"


export const getMovies=()=>{
    return async function(dispatch){
        const response= await axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=5ad1a1125f0c1d3d69c2569e46f9b71b')
        .then(res=>res.data)
        .catch(err=>console.error(err))
        dispatch({type:GET_MOVIES,payload:response})
    }
}

export const searchMovie=(name)=>{
console.log(name)
    return async function(dispatch){
        const res = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=5ad1a1125f0c1d3d69c2569e46f9b71b&query=${name}`)
        .then(response=>response.data)
        .catch(err=>console.error(err))
        dispatch({type:SEARCH_MOVIE,payload:res})
    }
}

export const detailMovie=(id)=>{
    return async function(dispatch){
        const res = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=5ad1a1125f0c1d3d69c2569e46f9b71b`)
        .then(response=>response.data)
        .catch(err=>console.error(err))
        dispatch({type:MOVIE_DETAIL,payload:res})
    }
}

export const filterStars=(score)=>{
    return function (dispatch) {
        return dispatch({ type: FILTER_STARS, payload: score });
      };
    
}