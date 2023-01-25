import React, {createContext, useContext, useReducer} from "react";
import { initialState as InitialState, reducer as Reducer, ContextType } from './reducer';

export const StateContext = createContext <ContextType >(InitialState);


export const StateProvider = ({children} : any) => {
    const [state, dispatch]  = useReducer(Reducer, InitialState.state)
    return (<StateContext.Provider value={{state, dispatch}}>
        {children}
    </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext)

