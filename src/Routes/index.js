import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home,Hire,ThankYou,ApplyForJob} from "../Pages"
import {AppBar} from "../Components"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<><AppBar/><Home/></>),
  },
  {
    path: '/start',
    element: <Hire/>
  },
  {
    path: '/thankyou',
    element: <ThankYou/>
  },
  {
    path: '/applyforjob',
    element: <ApplyForJob/>
  },
]);

export default function Routes(){
    return(
        <RouterProvider router={router} />
    )
}