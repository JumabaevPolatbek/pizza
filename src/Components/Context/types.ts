export interface IPizza{
    id: number,
    name: string,
    price: number,
    img: string,
    quantity:number
}
export interface IInitialState{
    total: number,
    pizzas: IPizza[],
    add?: Function,
    del?: Function,
    increment?: Function,
    decrement?:Function
}