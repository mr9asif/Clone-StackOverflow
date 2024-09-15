import { createBrowserRouter } from "react-router-dom";
import AskQuestion from "../Compnents/AskQuestion";
import Home from "../Compnents/Home";
import Question from "../Compnents/Question";
import Root from "../Compnents/Root";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[{
             path:'/',
             element:<Home></Home>,
            
        },
          {
            path:'/questions',
            element:<Question></Question>
          },
         {
          path:'/askquestion',
          element:<AskQuestion></AskQuestion>
         }
    
    ]
    },
   
 ])

export default router;