import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Nabvar from "../navbar/Nabvar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
           <Nabvar></Nabvar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;