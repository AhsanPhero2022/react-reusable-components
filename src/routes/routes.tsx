import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Admin from "../components/layout/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "admin",
    element: <Admin></Admin>,
    children: [
      {
        index: true,
        element: <div>this is admin</div>,
      },
    ],
  },
]);

export default router;
