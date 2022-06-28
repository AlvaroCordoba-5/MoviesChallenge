import axios from "axios";

export const GET_MOVIES="GET_MOVIES"


export const getMovies=()=>{
    return async function(dispatch){
        const response= await axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=5ad1a1125f0c1d3d69c2569e46f9b71b')
        .then(res=>res.data)
        .catch(err=>console.error(err))
        dispatch({type:GET_MOVIES,payload:response})
    }
}