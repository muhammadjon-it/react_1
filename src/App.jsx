import React from 'react'
import Layout from '@/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Catalog from './pages/Catalog'
import News from './pages/News'
import Partners from './pages/Partners'
import Contacts from './pages/Contacts'

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
          path: "catalog",
          element: <Catalog />
        }, {
          path: "about",
          element: <About />
        }, {
          path: "news",
          element: <News />
        }, {
          path: "partners",
          element: <Partners />
        }, {
          path: "contacts",
          element: <Contacts />
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