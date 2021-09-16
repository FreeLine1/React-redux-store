import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import AddToCart from "./components/AddToCart";
import ReactModal from "react-modal";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const [productData, setProductData] = useState([]);
    const [showModal, setModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        axios({url: `https://fakestoreapi.com/products`})
            .then((response) => {
                    console.log(response.data);
                    setProductData(response.data)
                }
            ).catch((err) => {
            console.error(err)
        })

    }, []);

    return (
        <>
        <button className="btn-cart"  onClick={() => {setModal(true)}}><div>🛒</div></button>

    <div className="container">
                { productData.length ? productData.map((el) => {
                    return <AddToCart cart={el} title={"Add to Cart"} onAdd={()=>{dispatch({type: "ADD_PRODUCT", payload: el})}}/>;
                    })
                    :
                    <div></div>
                }

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
                                               title={"Del"}
                                               onDel={()=>{dispatch({type: "DEL_PRODUCT", payload: {id: el.id}})}}/>
                        )
                    })
                    :
                    <div></div>
                }

           </div>
            </ReactModal>

        </div>
        </>
    );
}

export default App;
