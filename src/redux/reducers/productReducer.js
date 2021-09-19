
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
        case "ADD_PRODUCT":{
            return saveToStorage( {...state, cart: [...state.cart, action.payload]});
        }

        case "DEL_PRODUCT":{
            const Arr = state.cart.filter((el) =>
                el.id !== action.payload.id
            )
            return saveToStorage({...state, cart: Arr});
        }

        default: return state;
    }

}
