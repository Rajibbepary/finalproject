import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../pages/Home/Home';
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/order/OrderFood";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Contact from "../pages/contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUser/AllUsers";
import AddItems from './../pages/Dashboard/addItems/AddItems';
import ManageItems from "../pages/Dashboard/manageItems/ManageItems";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          index: true,
          element:<Home/>
        },
        {
          path:'menu',
          element:<Menu/>
        },
        {
          path:'order/:category',
          element:<OrderFood/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children: [
       {
        path:'cart',
        element:<Cart/>
       },

       {
        path:'addItems',
        element:<AddItems/>
       },
       {
          path:'manageItems',
          element:<ManageItems></ManageItems>
       },
       //admin route
       {
        path:'users',
        element:<AllUsers/>
       }
      ]
    }
  ]);