import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
        path: "/post-job",
        element: <CreateJob/>,
      }
    ]
    },
  ]);

  export default router;