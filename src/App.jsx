import React from 'react'
import Layout from '@/Layout/Layout'
import Home from './pages/Home'
import Exchange from './pages/Exchange'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProductById from './pages/ProductById'
import Workies from './pages/Workies'

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
          path: "exchange",
          element: <Exchange />
        }, {
          path: "products",
          element: <Products />
        }, {
          path: "workies",
          element: <Workies/>
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App