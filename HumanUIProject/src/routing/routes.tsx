import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import Todo from "../components/Todo";

import Contact from "../components/Contact/Contact";
import Calendar from "../components/Calendar";
import Journal from "../Journal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/todo", element: <Todo /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/journal", element: <Journal /> },
      { path: "/contacts", element: <Contact /> },
    ],
  },
]);

export default router;
