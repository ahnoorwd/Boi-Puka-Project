import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/root/Root.jsx";
import Error from "./component/errorpage/Error.jsx";
import Home from "./component/home/Home.jsx";
import Dasbord from "./component/Dashboard/Dasbord.jsx";
import Bookdetail from "./component/bookdetail/Bookdetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:"books/:bookID",
       element:<Bookdetail></Bookdetail>
      },
      {
        path:'/dashboard',
        element:<Dasbord></Dasbord>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
