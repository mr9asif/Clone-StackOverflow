import { createBrowserRouter } from "react-router-dom";
import Home from "../Compnents/Home";
import Root from "../Compnents/Root";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[{
             path:'/',
             element:<Home></Home>
        }]
    }
 ])

export default router;