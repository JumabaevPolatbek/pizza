import Pizza from "./Components/Pizza";
import { PizzaProvider } from "./Components/Context/provider";
import { Routes, Route } from 'react-router-dom'
import Ingredients from "./Components/Ingredients/Ingredients";
import CheckOut from "./Components/CheckOut/CheckOut";

function App(){
    return(
        <PizzaProvider>
            <Routes>
                <Route path="/" element={<Pizza />} />
                <Route path="/checkout" element={<CheckOut/>}/>
            </Routes>
        </PizzaProvider>
    )
}
export default App;