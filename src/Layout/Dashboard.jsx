import { FaBars, FaCalendarAlt, FaCalendarCheck, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaBook, FaBowlFood } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdPayment } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();
  
    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[hsla(36,57%,57%,1)] py-10 ">
                <h1 className="text-center text-3xl font-bold mb-2">BISTRO BOSS</h1>
                <p className="text-center text-[20px]" style={{ letterSpacing: '8px' }}>Restaurant</p>
                <ul className="menu gap-2">
                    {
                        isAdmin?<>
                          <li className="text-xl ">
                        <NavLink to='/dashboard/adminhome' ><FaHome/> ADMIN HOME</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/addItems' ><FaUtensils /> ADD ITEMS</NavLink>
                    </li>
                    <li className="text-xl ">
                        <NavLink to='/dashboard/adminhome' ><FaList /> MANAG ITEMS</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/adminhome' ><FaBook/> MANAGE BOOKINS</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/users'><FaUser/> ALL USER</NavLink>
                    </li>
                        </>:
                        <>
                          <li className="text-xl ">
                        <NavLink to='/dashboard/adminhome' ><FaHome/> USEA HOME</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/adminhome' ><FaCalendarAlt /> RESERVATION</NavLink>
                    </li>
                    <li className="text-xl ">
                        <NavLink to='/dashboard/adminhome' ><MdPayment /> PAYMENT HISTORY</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/adminhome' ><FaBook/> MANAGE BOOKINS</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/dashboard/cart'><FaShoppingCart/> MY CART({cart.length})</NavLink>
                    </li>
                        </>
                    }
                    <div className="divider divider-primary"></div>
                    <li className="text-xl">
                        <NavLink to='/'><FaHome/> HOME</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/menu'><FaBars/> MENU</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/order/:category'><FaBowlFood/> FOOD</NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink to='/contact'><FaCalendarCheck /> CONTACT</NavLink>
                    </li>
                </ul>
               
            </div>
            <div className="flex-1 p-8">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;