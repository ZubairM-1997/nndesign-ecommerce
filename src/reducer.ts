import { Reducer } from 'react'

type Item = {
    id: string,
    name: string,
    price: string,
    description: string,
    image: string
}

export type State = {
    basket: Item[],
    user: {
        email: string,
        password: string
    },
}

type Action = {
    type: string,
    item: Item
}

export interface ContextType {
    state: {
        basket: Item[],
        user: {
            email: string,
            password: string
        }
    },
    dispatch: React.Dispatch<{ type: string; value: unknown }>;
}


export const initialState  = {
    basket: [], 
    user: null
} as unknown as ContextType

export const reducer = (state: State, action: Action) : State => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default: 
            return state;
        
    }
}

