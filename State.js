import{
     createContext, useContext
} from "react";
import { initialState } from "./Reducer";
export const StateContext = createContext();
export const State =({initialState, children}) =>{
    <StateContext.Provider value={initialState}>
        {children}
        </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext);