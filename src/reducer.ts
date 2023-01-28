import { Reducer } from 'react'

export type Product = {
    id: number | null,
    uuid: string | null,
    name: string | null,
    price: number | null,
    description: string | null,
    images: string[] ,
    smallSize_inStock: number | null,
    mediumSize_inStock: number | null,
    largeSize_inStock: number | null,
    extraLargeSize_inStock: number | null
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

