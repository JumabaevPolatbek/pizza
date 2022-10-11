import { pizzaItems, usePizza } from "../../Context/provider"
import { pizzas } from "../../../data"
import List from "../List/List"
import './ingredients.css'
import CheckOutBtn from "../CheckoutBtn/CheckOutBtn"

export default function ItemIngredients() {
    const { totalSum, reset, save, pizzaItems, savePizza } = usePizza()
    function cuponUuid (pizza:pizzaItems[]):any {
        return savePizza.map(item => {
            if (item.pizza === pizza) {
                return item.uuid
            }
        })
    }
    return (
        <div className="ingredients">
            <div className="header">
                <h2>Your pizza</h2>
                <span className="total">{totalSum() }$</span>
                <button className="reset-btn" onClick={()=>reset()}>Reset pizza</button>
            </div>
            <div className="list-ingredients">
                {pizzas.map(pizza => {
                    if (pizza.name !== 'Pastry') {
                        return <List pizza={pizza} key={pizza.id}/>
                    }
                })}
            </div>
            <div className="total-text">
                <span>Total</span>
                <p>{ totalSum()} $</p>
            </div>
            <div className="footer">
                <div className="btns-footer">
                    <button className="save" onClick={()=>save(pizzaItems)}>Save Pizza</button>
                    <CheckOutBtn/>
                </div>
                <div className="btn">
                    <button className="load">Load Pizza</button>
                </div>
            </div>
            {savePizza.length > 0 ?
                (
                    <div className="uuid">
                            <p>{cuponUuid(pizzaItems)}</p>
                    </div>
                )
                :
                ''
            }
        </div>
    )
}