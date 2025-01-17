import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllFoods from "../../pages/AllFoods/AllFoods";
import Gallery from "../../pages/Gallery/Gallery";
import AddFood from "../../pages/AddFood/AddFood";
import MyFood from "../../pages/MyFood/MyFood";
import MyOrders from "../../pages/MyOrders/MyOrders";
import SecureRouter from "../SecureRouter/SecureRouter";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";
import UpdateFood from "../../pages/UpdateFood/UpdateFood";
import FoodPurchase from "../../pages/FoodPurchase/FoodPurchase";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Contact from "../../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/add-food",
        element: (
          <SecureRouter>
            <AddFood></AddFood>
          </SecureRouter>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <SecureRouter>
            <MyFood></MyFood>
          </SecureRouter>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <SecureRouter>
            <MyOrders></MyOrders>
          </SecureRouter>
        ),
      },
      {
        path: "/food/details/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/food/purchase/:id",
        element: (
          <SecureRouter>
            <FoodPurchase></FoodPurchase>
          </SecureRouter>
        ),
      },
      {
        path: "/food/update/:id",
        element: (
          <SecureRouter>
            <UpdateFood></UpdateFood>
          </SecureRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
