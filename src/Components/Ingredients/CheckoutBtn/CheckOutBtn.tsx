import React from "react"
import { Link } from "react-router-dom"
import { pizzaItems, usePizza } from "../../Context/provider"
import './Checkout.css'


export default function CheckOutBtn() {
    const [modal, setModal] = React.useState(false)
    const { pizzaItems, totalSum } = usePizza()
    const checkout = (pizzaItems: pizzaItems[]):boolean => {
        if (pizzaItems.length > 1) {
            return false
        }else return true
    }
    return (
        <>
            <button className="checkout" onClick={() => setModal(true)} disabled={checkout(pizzaItems)}>Checkout</button>
            <div className="modal" style={{display:`${modal?'flex':'none'}`}}>
                <div className="modal-info">
                    <h3>Your Order</h3>
                    <p>The pizza has the fallowing ingredients</p>
                    <ul>
                        {pizzaItems.map(pizza => {
                            return (
                                <li key={pizza.id}>
                                    <p>{pizza.name}: { pizza.quantity}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <p>Total price: {totalSum()}$</p>
                    <p>Continue to checkout!</p>
                    <div className="btns">
                        <button className="cancel" onClick={()=>setModal(false)}>Cancel</button>
                        <button className="continue" onClick={(e)=>e.preventDefault()}><Link to={'/checkout'}>Continue</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}