import React, {useState} from "react";
import '../../App.css';
import {useDispatch} from "react-redux";


export default function Card({cart, buttonText, className, type}) {

    const [compoundPrice, setCompoundPrice] = useState(null);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();


    const onAdd = (el)=>{
        dispatch({type: "ADD_PRODUCT", payload: {product:el, count}})
    }

    const onDel = (el)=>{
        dispatch({type: "DEL_PRODUCT", payload: {product: el}})
    }


    const onChange = (v, target) => {
        setCount(v)
        setCompoundPrice(cart.price * v)
        if (v > 100){
            alert("You can't buy more than 100 pcs");
            setCompoundPrice(v = null)
            setCount(1)
            target.value = ''
        }else if(v <= 1){
            setCompoundPrice(v = null)
            setCount(1)
            target.value = ''
        }
    }
    return (

        <div className={className || "cart"} >
            <img className="Img-style" alt="some product" src={cart.image}/>
            <div className="cart-bottom">
            <div style={{fontSize: "19px", fontWeight: "bold"}}>$ {cart.price}</div>
                {type!=="add"?<div className="howmany">How many?
                    <input
                        type="number"
                        pattern="^[ 0-9]+$"
                        className='inpCount'
                        value={count}
                        onChange={(e) => onChange(e.target.value, e.target)}/>
            </div>:null}
                <div>
                    <button onClick={()=>{type==='add'? onAdd(cart) : onDel(cart)}}> {buttonText} </button>
                </div>
            </div>
        </div>


    );
};