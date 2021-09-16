
const initialState = {
    cart: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":{

            return {...state, cart: [...state.cart, action.payload]};
        }
        
        case "DEL_PRODUCT":{
        const Arr = [];
        state.cart.map((el)=>{
            if(el.id != action.payload.id) Arr.push(el)
        })
            return {...state, cart: Arr};
        }
            // return {...state, ...action.payload.product}
            default: return state;
    }

}