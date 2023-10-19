import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Custom404 from "./pages/404.tsx";
import Home from "./pages/auth/home.tsx";
import ForgotPassword from "./pages/auth/forgot-password.tsx";
import ResetPassword from "./pages/auth/reset-password.tsx";
import PersonalData from "./pages/application-form/personal-data.tsx";
import LearningPath from "./pages/application-form/learning-path.tsx";
import Payment from "./pages/application-form/payment.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Custom404 />
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
    errorElement: <Custom404 />
  },
  {
    path: "/auth/reset-password",
    element: <ResetPassword />,
    errorElement: <Custom404 />
  },
  {
    path: "/application-form/personal-data",
    element: <PersonalData />,
    errorElement: <Custom404 />
  },
  {
    path: "/application-form/learning-path",
    element: <LearningPath />,
    errorElement: <Custom404 />
  },
  {
    path: "/application-form/payment",
    element: <Payment />,
    errorElement: <Custom404 />
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
