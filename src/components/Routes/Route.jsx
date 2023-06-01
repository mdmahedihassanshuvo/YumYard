import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Home from "../Page/Home/Home";
import Blog from "../Page/Blog/Blog";
import Footer from "../Shared-Page/Footer/Footer";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ViewRecipes from "../Page/ViewRecipes/ViewRecipes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "../Page/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://food-server-hassanmdmahedi729-gmailcom.vercel.app/chefData')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chefData/:id',
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-server-hassanmdmahedi729-gmailcom.vercel.app/chefData/${params.id}`)
      }
    ]
  }
]);

export default router;