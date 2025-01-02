import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../pages/Home/Home';
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/order/OrderFood";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";



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
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    },
  ]);