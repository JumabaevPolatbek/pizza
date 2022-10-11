import { usePizza } from '../../Context/provider'
import './Buildpizza.css'
import Images from './Images'


export default function BuildPizza() {
    const {pizzaItems}=usePizza()
    return (
        <div className='build'>
            <h1>Your Pizza</h1>
            <div className="build-pizza">
                {pizzaItems.map(pizza => {
                    return (
                        <Images pizza={pizza} key={pizza.id}/>
                    )
                })}
            </div>
        </div>
    )
}