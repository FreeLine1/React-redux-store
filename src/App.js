import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import AddToCart from "./components/AddToCart/AddToCart";
import ReactModal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import CartWindow from "./components/CartWindow/CartWindow";


function App() {

    const [productData, setProductData] = useState([]);
    const [showModal, setModal] = useState(false);
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
            <CartWindow />

    <div className="container">
                { productData.length ? productData.map((el) => {
                    return <AddToCart cart={el} cartView={"Add to Cart"} onInputChange={() => {}} onAdd={()=>{dispatch({type: "ADD_PRODUCT", payload: {product: el, qty: }})}}/>;
                    })
                    :
                    <div></div>
                }

        </div>
        </>
    );
}

export default App;
