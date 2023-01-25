import { Reducer } from 'react'

type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    images: string[],
    smallSize_inStock: number,
    mediumSize_inStock: number,
    largeSize_inStock: number,
    extraLargeSize_inStock: number
}

export type State = {
    basket: Product[] ,
    user: {
        email: string | null,
        password: string | null
    },
}

type Action = {
    type: string,
    item: Product
}

export interface ContextType {
    state: State,
    dispatch: React.Dispatch<Action>;
}


export const initialState : ContextType = {
    state : {
        basket: [] as Product[],
        user: {
            email: null,
            password: null
        }
    },

    dispatch: () => {}
} 

export const reducer = (state: State, action: Action) : State => {
    console.log(action)
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

