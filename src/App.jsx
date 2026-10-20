import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Contact from "./pages/Contact";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }, {
          path: "curses",
          element: <Services />,
        }, {
          path: "careers",
          element: <Careers/>,
        }, {
          path: "careerDetails",
          element: <CareerDetails />,
        }, {

          path: "contact",
          element: <Contact />,
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App