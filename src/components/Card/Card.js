import React, {useState} from "react";
import '../../App.css';
import {useDispatch} from "react-redux";


export default function Card({cart, buttonText, className, type, inputCount, itemPrice, inCart}) {

    const [compoundPrice, setCompoundPrice] = useState(itemPrice);
    const [count, setCount] = useState(1);
    const [cartItem, setCartItem] = useState(inputCount)
    const dispatch = useDispatch();


    const onAdd = (el)=>{
        dispatch({type: "ADD_PRODUCT", payload: {product: cart, count: + count}})
    }

    const onDel = (el)=>{
        dispatch({type: "DEL_PRODUCT", payload: {product: el}})
    }


    const onChange = (v, target) => {
        setCount(v)
        setCartItem(v)
        setCompoundPrice(cart.price * v)
        if (v > 100){
            alert("You can't buy more than 100 pcs");
            setCompoundPrice(v = null)
            setCartItem(1)
            setCount(1)
            target.value = ''
        }else if(v <= 1){
            setCompoundPrice(v = null)
            setCartItem(1)
            setCount(1)
            target.value = ''
        }
    }
    return (

            <>
        <div className={className || "cart"} >
            <img className="Img-style" alt="some product" src={cart.image}/>
            <div className="cart-bottom">
            <div style={{fontSize: "19px", fontWeight: "bold"}}>
                {inCart === "true"?

                        <p style={{margin: "0px"}}> {Math.ceil(!compoundPrice ? cart.price : compoundPrice)} $ </p>

                    : inCart === "false"?

                            <p style={{margin: "0px"}}>{Math.ceil(cart.price * cartItem)} $ </p> : null
                }
            </div>
                <div className="howmany">How many?
                    <input
                        type="number"
                        pattern="^[ 0-9]+$"
                        className='inpCount'
                        value={cartItem}
                        onChange={(e) => onChange(e.target.value, e.target)}/>
            </div>
                <div>
                    <button onClick={()=>{type==='add'? onAdd(cart) : onDel(cart)}}> {buttonText} </button>
                </div>
            </div>
        </div>
                </>
    );
};