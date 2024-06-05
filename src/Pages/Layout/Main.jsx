import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-white">

            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;