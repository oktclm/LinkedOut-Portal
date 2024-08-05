import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
        path: "/post-job",
        element: <CreateJob/>,
      },
      {
        path: "/my-job",
        element: <MyJobs/>,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob/>,
        loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      },
      {
        path: "/job/:id",
        element: <JobDetails/>
      }
    ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

  export default router;