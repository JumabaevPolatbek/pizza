import React from "react";
import { usePizza } from "../Context/provider";
import ListIngredients from "./ListIngredients";
import './Checkout.css'
import { Link } from "react-router-dom";


export default function CheckOut() {
    const { pizzaItems } = usePizza()
    const [disabled, setDisabled] = React.useState(true);
    const [nameValue, setNameValue] = React.useState('');
    const [email, setEmail] = React.useState('');
    const checksubmit = () => {
        if (nameValue.length>0 && email.length>0) {
            return alert('Ваш заказ принят!  '+ pizzaItems.map(item=>`${item.name} ${item.quantity}`))
        }
    }

    return (
        <div className="container">
            <header>
                    <nav className="header_nav">
                        <Link to={"/"}>Build your pizza</Link>
                        <Link to={"/"}>Ingredients</Link>
                    </nav>
            </header>
            <div className="checkout-page">
            <form onSubmit={(e) => { e.preventDefault(); checksubmit()}}>
                <div className="name checkout-page__item">
                    <label htmlFor="">Name:</label>
                        <input type="text" placeholder="Your name" required={true} name="name" value={nameValue} onChange={(e) => { setNameValue(e.target.value)}} />
                </div>
                <div className="email checkout-page__item">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Your email" required={true} name="email" onChange={ (e)=>setEmail(e.target.value)}/>
                </div>
                <div className="delivery checkout-page__item">
                    <label htmlFor="">Choose delivery method:</label>
                    <select name="delivery" id="">
                        <option value="delivery">Delivery</option>
                        <option value="pickup">Local pickup</option>
                    </select>
                </div>
                <div className="text-area checkout-page__item">
                    <label htmlFor="">Additional notes:</label>
                    <textarea name="note" id="note" cols={30} rows={10}></textarea>
                </div>
                <div className="client checkout-page__item">
                    <label htmlFor="">Are you a regular client</label>
                    <div className="radio-btns">
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="yes" name="radio" />
                        <label htmlFor="no">No</label>
                        <input type="radio" id="no" name="radio" />
                    </div>
                </div>
                <div className="cupon-check checkout-page__item">
                    <label htmlFor="cupon">Do you have a cupon code?</label>
                    <input type="checkbox" name="cupon" id="cupon" onClick={()=>setDisabled(prev=>!prev)}/>
                </div>
                <div className="cupon-value checkout-page__item">
                    <label htmlFor="">Cupon</label>
                    <input type="text" disabled={ disabled} />
                </div>
                <div className="btns checkout-page__item">
                    <button onClick={(e) => { e.preventDefault(); document.forms[0].reset()}} className="reset">Reset</button>
                        <button  className="submit">Submit</button>
                </div>
            </form>
            <div className="igredients-item">
                {pizzaItems.map(pizza => {
                    return <ListIngredients pizza={pizza} key={pizza.id}/>
                })}
                </div>
                </div>
        </div>
    )
}