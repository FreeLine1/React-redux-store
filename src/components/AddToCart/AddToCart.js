import React, {useState} from "react";
import '../../App.css';


export default function AddToCart({cart, onAdd, onDel, cartView, className, onInputChange}) {

    const [compoundPrice, setCompoundPrice] = useState(null);
    const [count, setCount] = useState(1);


    const onChange = (v, target) => {
        onInputChange(+target.value)
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
            <div className="howmany">How many? <input type="number" pattern="^[ 0-9]+$" className='inpCount' value={count}
                                                      onChange={(e) => onChange(e.target.value, e.target)}
            /></div>
            <div>
                <button onClick={onDel ? onDel: onAdd}> {cartView} </button>
            </div>
            </div>
        </div>


    );
};