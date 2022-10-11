import React from 'react';
import { pizzaItems, SavePizzas } from './provider';
import { IPizza } from './types';
type ContextFunctions={
    totalSum: () => number,
    getQty:(id:number)=>number,
    increase:(id:number)=>void,
    decrease:(id:number)=>void,
    save:(state:pizzaItems[])=>void,
    load:(uuid:string)=>void,
    pizzaItems: pizzaItems[]
    savePizza: SavePizzas[],
    reset:()=>void
}

export const Context = React.createContext( {} as ContextFunctions);