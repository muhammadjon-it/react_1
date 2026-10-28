import React, { lazy, Suspense } from 'react'
import Layout from '@/Layout/Layout'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthFlow from './pages/AuthFlow';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Sidebar from './Layout/Sidebar';

const Loading = (
  <div className="pt-30">
    <p>Loading...</p>
  </div>
)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element:

            <Suspense fallback={Loading}>
              <Home />
            </Suspense>
        }, {
          path: "about",
          element:
            <AuthFlow>
              <Suspense fallback={Loading}>
                <About />
              </Suspense>
            </AuthFlow>
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }, {
      path: "login",
      element:
        <AuthFlow>
          <Suspense fallback={Loading}>
            <Login />
          </Suspense>
        </AuthFlow>
    },
    {
      path: "todos",
      element: <Sidebar />,
      children: [
        {
          index: true,
          element: (
            <AuthFlow>
              <Suspense fallback={Loading}>
                <Todos />
              </Suspense>
            </AuthFlow>
          )
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App