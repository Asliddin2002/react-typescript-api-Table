
export interface initialStateTypes {
    data:any
    loading: boolean;
    error: string | null ;
  }
  
  export enum UseActionTypes {
    FETCH_USE = "FETCH_USE",
    FETCH_SUCCES = "FETCH_SECCES",
    FETCH_ERROR = "FETCH_ERROR",
    DELETE_ITEM = "DELETE_ITEM",
    ADD_USER = "ADD_USER"
  }
  
  interface FetchUseAction {
    type: UseActionTypes.FETCH_USE;
  }
  
  interface FetchSuccesAction {
    type: UseActionTypes.FETCH_SUCCES;
    payload:any;
  }
  
  interface FetchErrorAction {
    type: UseActionTypes.FETCH_ERROR;
    payload: string;
  }
  interface DeleteItem {
    type: UseActionTypes.DELETE_ITEM;
    payload: number;
  }
  interface AddUser {
    type: UseActionTypes.ADD_USER;
    payload: any;
  }
  
  export type UseAction = FetchUseAction | FetchSuccesAction | FetchErrorAction | DeleteItem | AddUser;