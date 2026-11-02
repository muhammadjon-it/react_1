import React, { lazy, Suspense } from 'react'
import Layout from '@/Layout/Layout'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthFlow from './pages/AuthFlow';

const Loading = (
  <div className="pt-30">
    <p>Loading...</p>
  </div>
)
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Login = lazy(() => import('./pages/Login'))
const Favorite = lazy(() => import('./pages/Favorite'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Checkout = lazy(() => import("./pages/Checkout"));
const MyAccount = lazy(() => import("./pages/MyAccount"));


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element:
            <AuthFlow>
              <Suspense fallback={Loading}>
                <Home />
              </Suspense>
            </AuthFlow>
        }, {
          path: "shop",
          element:
            <AuthFlow>
              <Suspense fallback={Loading}>
                <Shop />
              </Suspense>
            </AuthFlow>
        }, {
          path: "favorite",
          element:
            <AuthFlow>
              <Suspense fallback={Loading}>
                <Favorite />
              </Suspense>
            </AuthFlow>
        }, {
          path: "product/:productId",
          element: (
            <AuthFlow>
              <Suspense fallback={Loading}>
                <ProductDetails />
              </Suspense>
            </AuthFlow>
          ),
        }, {
          path: "checkout",
          element: (
            <AuthFlow>
              <Suspense fallback={Loading}>
                <Checkout />
              </Suspense>
            </AuthFlow>
          ),
        }, {
          path: "myaccount",
          element: (
            <AuthFlow>
              <Suspense fallback={Loading}>
                <MyAccount />
              </Suspense>
            </AuthFlow>
          ),
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }, {
      path: "not-found",
      element: <NotFound />,
    }, {
      path: "login",
      element:
        <AuthFlow>
          <Suspense fallback={Loading}>
            <Login />
          </Suspense>
        </AuthFlow>
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App