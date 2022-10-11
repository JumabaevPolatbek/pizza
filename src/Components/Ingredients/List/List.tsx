import { usePizza } from "../../Context/provider";
import { IPizza } from "../../Context/types";
import './List.css'

type Props = {
    pizza:IPizza
}

export default function List({ pizza }: Props) {
    const {getQty,increase,decrease}=usePizza()
    return (
        <div className="item__ingredient">
            <div className="ingredients__text">
                <p>{pizza.name }</p>
                <span>{ pizza.price} $</span>
            </div>
            <div className="btns-ingredients">
                <button onClick={()=>decrease(pizza.id)} className="decrease">-</button>
                <span>{getQty(pizza.id)}</span>
                <button onClick={()=>increase(pizza.id)} className="increase">+</button>
            </div>
        </div>
    )
}