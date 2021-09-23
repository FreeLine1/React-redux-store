import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card/Card";


import CartWindow from "./components/CartWindow/CartWindow";


function App() {
    const [productData, setProductData] = useState([]);


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
                {productData.length ? productData.map((el) => {
                    return(
                        <Card
                            cart={el}
                            inCart={"true"}
                            type={'add'}
                            buttonText={"Add to Cart"}
                            />)
                    }):null}
            </div>
        </>
    );
}

export default App;
