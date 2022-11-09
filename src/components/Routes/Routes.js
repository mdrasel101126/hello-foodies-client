import Home from "../Home/Home";
import Login from "../Login/Login";
import MyReviews from "../MyReviews/MyReviews";
import Register from "../Register/Register";
import ServiceDetails from "../Services/ServiceDetails";
import Services from "../Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allservices",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/allservices"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allservices/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
]);

export default routes;
