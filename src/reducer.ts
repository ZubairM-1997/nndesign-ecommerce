interface Item  {
    name: string,
    price: string,
    image: string
}

export interface State  {
    basket: Item[]
}


export const initialState : State = {
    basket: []
}

export const reducer = (state: State, action: { type: string, item: any }) : State => {
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

