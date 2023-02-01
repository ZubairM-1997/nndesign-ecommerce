
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


export type size = "S" | "M" | "L" | "XL"


type chosenItem = {
    id: number | null,
    uuid: string | null,
    name: string | null,
    price: number | null,
    description: string | null,
    images: string[],
    size: size | null,
    quantity: number | null
}

export type State = {
    basket: chosenItem[] ,
    user: {
        email: string | null,
        password: string | null
    },
}

type Action = {
    type: string,
    item: chosenItem
}

export interface ContextType {
    state: State,
    dispatch: React.Dispatch<Action>;
}


export const initialState : ContextType = {
    state : {
        basket: [] as chosenItem[],
        user: {
            email: null,
            password: null
        }
    },

    dispatch: () => {}
} 

export const reducer = (state: State, action: Action) : State => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
        console.log(action)
        const item = action.item;
        const chosenItem: chosenItem = {
          id: item.id,
          uuid: item.uuid,
          name: item.name,
          price: item.price,
          description: item.description,
          images: item.images,
          size: item.size, // or provide a default value
          quantity: item.quantity // or provide a default value
        };
      
        return {
          ...state,
          basket: [...state.basket, chosenItem]
        };
        default: 
            return state;
        
    }
}

