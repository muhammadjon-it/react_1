
import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const Loading = <div className="p-10">Loading...</div>;

const Users = lazy(() => import("@/pages/Users"));
const Catalogs = lazy(() => import("@/pages/Catalog"));
const Products = lazy(() => import("@/pages/Products"));
const Login = lazy(() => import("@/pages/Login"));
const Sidebar = lazy(() => import("@/layout/Sidbar"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Auth = lazy(() => import("@/pages/Auth"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={Loading}>
          <Auth>
            <Sidebar />
          </Auth>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={Loading}>
              <Users />
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback={Loading}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "catalogs",
          element: (
            <Suspense fallback={Loading}>
              <Catalogs />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={Loading}>
          <NotFound />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
