import { GET_MOVIES,SEARCH_MOVIE } from "../action";

const initialState = {
 movies:[],
 allmovies:[]
  
};

const rootReducer = (state = initialState, {type,payload}) => {
  switch
  (type)
  {
    case GET_MOVIES:
      return{
        ...state,
        movies:payload,
        allmovies:payload
      }
      case SEARCH_MOVIE:

        return{
          ...state,
          movies:payload
        }
 
default:return state
  }


};

export default rootReducer;
