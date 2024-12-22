import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllFoods from "../../pages/AllFoods/AllFoods";
import Gallery from "../../pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-foods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            }
        ]

    }
]);

export default router; 