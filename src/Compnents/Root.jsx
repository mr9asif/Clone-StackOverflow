import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";


const Root = () => {
    return (
        <div className="">
             <Navbar></Navbar>
              
             <div className="flex items-center">
              <SideMenu></SideMenu>
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default Root;