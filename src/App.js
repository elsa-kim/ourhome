import React from "react";
import Root from "./page/Root";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./page/Products";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Cart from "./page/Cart";

function Layout() {
  return (
    <>
      <Root />
      <Outlet />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Products /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
