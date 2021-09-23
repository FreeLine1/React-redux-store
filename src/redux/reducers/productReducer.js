const localStorageState = localStorage.getItem('state')? JSON.parse(localStorage.getItem('state')):null;

const initialState = localStorageState || {
    cart: []
};

function saveToStorage(state) {
    localStorage.setItem('state', JSON.stringify(state));
    return state;
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_PRODUCT": {
            let isNew = true;
            if(state.cart.length>0) {
                const arr = state.cart.map((el) => {
                    if (el.product.id === action.payload.product.id) {
                        isNew = false;
                        return {
                            product: el.product,
                            count: el.count + action.payload.count,
                        }

                    }
                    else return el;
                })
                if(isNew) arr.push(action.payload)
                return saveToStorage({...state, cart: arr});
            }else return saveToStorage({...state, cart: [...state.cart, action.payload]});
        }

        case "DEL_PRODUCT":{
            const Arr = state.cart.filter((el) =>
                el.product.id !== action.payload.product.id
            )
            return saveToStorage({...state, cart: Arr});
        }

        default: return state;
    }

}
