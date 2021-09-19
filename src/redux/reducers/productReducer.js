
const initialState = {
    cart: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":{

            return {...state, cart: [...state.cart, action.payload]};
        }

        case "DEL_PRODUCT":{

            const Arr = state.cart.filter((el) =>
                el.id !== action.payload.id
            )
            return {...state, cart: Arr};
        }

            // return {...state, ...action.payload.product}
            default: return state;
    }

}