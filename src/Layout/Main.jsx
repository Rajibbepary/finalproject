import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
  
    return (
        <div>
          { noHeaderFooter || <Navbar/> }
          <Outlet></Outlet>
          { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;