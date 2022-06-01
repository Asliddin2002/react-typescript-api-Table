import { useDispatch } from "react-redux";
import * as ActionCreators from '../Data'
import { bindActionCreators } from "redux";


export const useDispatchHook = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}