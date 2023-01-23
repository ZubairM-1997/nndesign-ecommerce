type Item = {
    name: string,
    price: string,
    image: string
}

export type State = {
    basket: Item[],
}


export const initialState : State = {
    basket: []
}

export const reducer = (state: any, action: { type: string, item: any })  => {
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

