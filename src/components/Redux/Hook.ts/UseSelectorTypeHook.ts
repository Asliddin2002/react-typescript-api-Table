import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootState } from "../CombineRedux";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector