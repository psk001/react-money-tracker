import { Routes, Route } from "react-router-dom";
import AddExpenseForm from "../addExpenseForm";
import Tracker from "../tracker";

const AppRouter = () => {
    return ( 
        <Routes>
            <Route path="/add-expense" Component={AddExpenseForm}/>
            <Route path="/" Component={Tracker}/>
        </Routes>
     );
}
 
export default AppRouter;