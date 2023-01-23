import React, {createContext, useContext, useReducer} from "react";
import { initialState, reducer } from "./reducer";
import { State } from "./reducer";
import { ContextType } from './reducer'

export const StateContext = createContext <ContextType >(initialState);
const [state, dispatch] = useReducer(reducer, initialState)

export const StateProvider = ({ reducer, initialState, children} : any) => (
    <StateContext.Provider value={{state, dispatch}}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

