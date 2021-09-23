import React, {useState} from 'react';
import './CartWindow.css';
import Card from "../Card/Card";
import ReactModal from "react-modal";
import {useDispatch, useSelector} from "react-redux";

export default function CartWindow() {

    const [showModal, setModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <button className="btn-cart"  onClick={() => {setModal(true)}}><div>🛒</div></button>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal">
                <button className="close-cart" onClick={() => {setModal(false)}}>Close Cart</button>
                <div className="containerInCart">
                    {cart.length < 1 ? <div>You haven't goods in your cart!</div> :
                        <div>You have {cart.length} good's in your cart!</div> }

                        {cart.map((el) => {
                                return (
                                    <Card className ="inCart"
                                          buttonText={'Delete'}
                                          cart={el.product}
                                          inCart={"false"}
                                          inputCount={el.count}
                                          itemPrice={el.count * el.price}
                                          cartView={"Del"}
                                          onDel={()=>{dispatch({type: "DEL_PRODUCT", payload: {id: el.product.id}})}}/>
                                )})}
                </div>
            </ReactModal>
        </>
    );

}