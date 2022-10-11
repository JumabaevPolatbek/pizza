import React from 'react';
import { IPizza } from './types'
import { Context } from './context';
import { pizzas } from '../../data';
import {v4 as uuidv4} from 'uuid';
type PropsProvider={
    children:React.ReactNode
}
export type pizzaItems={
    id:number,
    quantity:number,
    price?:number|any,
    img?:string,
    name?:string,
    currency?:string
}
export type SavePizzas={
    uuid:string
    pizza:pizzaItems[]
}
export const PizzaProvider = ({ children }:PropsProvider) => {

    const [pizzaItems,setPizzaItems]=React.useState<pizzaItems[]>([pizzas[0]]);
    const [savePizza,setSavePizza]=React.useState<SavePizzas[]>([]);
    const uuid = require('uuid')
    function totalSum() {
        return pizzaItems.reduce((prevTotal, curTotal) => prevTotal + (curTotal.price * curTotal.quantity), 0);
    };

    function getQty(id: number) {
        return pizzaItems.find(item => item.id === id)?.quantity || 0;
    }

    function increase(id:number){
        setPizzaItems(curPizzaItems=>{
            if(curPizzaItems.find(item=>item.id===id)==null){
                return [...curPizzaItems,{
                    id,
                    quantity:1,
                    name:pizzas[id].name,
                    price:pizzas[id].price,
                    img:pizzas[id].img}
            ];
            }else {
                return curPizzaItems.map(item=>{
                    if(item.id===id){
                        return {...item,
                            quantity:item.quantity+1,
                            price:pizzas[id].price,
                            name:pizzas[id].name,
                            img:pizzas[id].img};
                        }
                    else {return item}
                })
            }
        })
    }

    function decrease(id: number) {
        if(pizzaItems.find(item=>item.id===id)){
            setPizzaItems(curPizzaItems=>{
                if(curPizzaItems.find(item=>item.id===id)?.quantity===1){
                    return curPizzaItems.filter(item=>item.id!==id)
                }else {
                    return curPizzaItems.map(pizza=>{
                        if (pizza.id === id) {
                            return {...pizza,quantity:pizza.quantity-1}
                        } else {
                            return pizza
                        }
                    })
                }
            })
        }
    }

    function save(pizzaItems: pizzaItems[]) {
        var num:string = uuid.v4()
        setSavePizza(curSavePizza=>[...curSavePizza,{uuid:num,pizza:pizzaItems}])
    }

    function load(uuid:string){
        savePizza.map(item=>{
            if(item.uuid===uuid){
                return setPizzaItems([...item.pizza]);
            }
        })
    }

    function reset() {
        setPizzaItems([pizzas[0]]);
    }

    const value ={
        totalSum,
        increase,
        decrease,
        pizzaItems,
        save,
        load,
        getQty,
        savePizza,
        reset
    }

    return <Context.Provider value={value}>{ children}</Context.Provider>
}
export const usePizza = () => {
    return React.useContext(Context)
}


