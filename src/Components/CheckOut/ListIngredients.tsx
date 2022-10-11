import { pizzaItems } from '../Context/provider'
import './Checkout.css'
type Props = {
    pizza:pizzaItems
}
export default function ({pizza}:Props) {
    return (
            <div className="ingredients-check" key={pizza.id}>
                    <span>x{pizza.quantity}</span>
                    <img src={`${pizza.img}`} alt={`${pizza.name}`} />
            </div>
    )
}