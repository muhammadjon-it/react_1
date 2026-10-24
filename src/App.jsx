import React, { lazy, Suspense } from 'react'
import Layout from '@/Layout/Layout'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Loading = (
  <div className="pt-30">
    <p>Loading...</p>
  </div>
)
const Products = lazy(() => import('./pages/Products'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ProductById = lazy(() => import('./pages/ProductById'))
const Todos = lazy(()=> import('@/pages/Todos'))


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Suspense fallback={Loading}>
            <Home />
          </Suspense>
        }, {
          path: "about",
          element: <Suspense fallback={Loading}>
            <About />
          </Suspense>
        }, {
          path:"todos",
          element: <Suspense fallback={Loading}>
            <Todos/>
          </Suspense>
        }
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