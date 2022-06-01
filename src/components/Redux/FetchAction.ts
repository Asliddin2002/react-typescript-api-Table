import { initialStateTypes } from "./ActionTypes";
import { UseAction, UseActionTypes } from "./ActionTypes";


const initialData: initialStateTypes = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const useReducers = (state = initialData, action: UseAction):initialStateTypes => {
    switch (action.type) {
      case UseActionTypes.FETCH_USE:
        return { ...state, loading: true };
      case UseActionTypes.FETCH_SUCCES:
        return {...state, loading: false, data: action.payload };
      case UseActionTypes.FETCH_ERROR:
        return { ...state, error: action.payload };
      case UseActionTypes.DELETE_ITEM:
        return { ...state, data: state.data.filter((item:any) => item.id !== action.payload)};
      case UseActionTypes.ADD_USER:
        return { ...state, data:[...state.data,  action.payload]};
      default:
        return state;
    }
  };