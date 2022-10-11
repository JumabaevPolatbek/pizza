import { pizzaItems } from "../../Context/provider"

type Props = {
    pizza:pizzaItems
}
export default function Images({pizza}:Props) {
    return (
        <div className="images">
            <span>x{ pizza.quantity}</span>
            <img src={`${pizza.img}`} alt={`${pizza.name}`} />
        </div>
    )
}