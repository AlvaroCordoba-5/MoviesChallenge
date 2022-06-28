import { GET_MOVIES } from "../action";

const initialState = {
 movies:[]
  
};

const rootReducer = (state = initialState, {type,payload}) => {
  switch
  (type)
  {
    case GET_MOVIES:
      return{
        ...state,
        movies:payload
      }
 
default:return state
  }


};

export default rootReducer;
