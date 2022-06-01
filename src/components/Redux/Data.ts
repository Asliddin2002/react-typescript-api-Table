import { Dispatch } from "redux"
import axios from "axios"
import { UseActionTypes } from "./ActionTypes"
import { UseAction } from "./ActionTypes"


export const Data = () => {
    return async (dispatch:Dispatch<UseAction>) => {
        try {
            dispatch({type:UseActionTypes.FETCH_USE})
            const res = await axios.get("https://reqres.in/api/users?page=2")
            dispatch({type:UseActionTypes.FETCH_SUCCES, payload:res.data.data})
        } catch (error) {
            dispatch({type:UseActionTypes.FETCH_ERROR, payload:"Oops, something went wrong 404"})
        }
    }
} 