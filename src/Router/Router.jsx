import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import ErrorPage from "../shared/errors/ErrorPage ";
const Main = lazy(()=> import("../Layout/Main"))
const About = lazy(() => import("../component/About/About"));
const Portfolio = lazy(() => import("../component/Portfolio/Portfolio"));
const Contact = lazy(() => import("../component/Contact/Contact"));
const Home = lazy(() => import("../component/Home/Home"));
const Details = lazy(() => import("../component/Portfolio/details/Details"));
const Services = lazy(() => import("../component/services/Services"));
const Blogs = lazy(() => import("../component/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../component/Blogs/BlogDetails"));
const BlogFrom = lazy(() => import("../component/Blogs/BlogFrom"));
const Register = lazy(() => import("../component/login/Register"));
const Login = lazy(() => import("../component/login/Login"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
         path:"/blogFrom",
         element:<BlogFrom />
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      
      {
        path: "/login",
        element: <Login />,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
