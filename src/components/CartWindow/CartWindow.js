import React, {useState} from 'react';
import './CartWindow.css';
import AddToCart from "../AddToCart/AddToCart";
import ReactModal from "react-modal";
import {useDispatch, useSelector} from "react-redux";

export default function CartWindow() {

    const [showModal, setModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
        <button className="btn-cart"  onClick={() => {setModal(true)}}><div>🛒</div></button>
            {console.log(cart)}
        <ReactModal
            isOpen={showModal}
            contentLabel="Minimal Modal"
        >
            <button className="close-cart" onClick={() => {setModal(false)}}>Close Cart</button>
            <div className="containerInCart">
                {cart.length < 1 ? <div>You haven't goods in your cart!</div> :
                    <div>You have {cart.length} good's in your cart!</div> }

                { cart.length ? cart.map((el) => {
                        return (

                            <AddToCart className ="inCart"
                                       cart={el}
                                       cartView={"Del"}
                                       onDel={()=>{dispatch({type: "DEL_PRODUCT", payload: {id: el.id}})}}/>
                        )
                    })
                    :
                    <div></div>
                }

            </div>
        </ReactModal>
            </>
    );

}