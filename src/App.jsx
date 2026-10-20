import React from 'react'
import Layout from '@/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProductById from './pages/ProductById'

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
          path: "about",
          element: <About />
        }, {
          path: "products",
          element: <Products />
        }, {
          path: "products/:id",
          element: <ProductById />
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