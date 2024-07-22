import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
// actions
import { dashBoardAction } from "./actions/dashBoardAction";
import { logoutAction } from "./actions/logout";
// pages
import Error from "./pages/Error";
import Main from "./layouts/Main";
import { dashboardLoader } from "./loaders/dashBoardLoader";
import { mainLoader } from "./loaders/mainLoader";
// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashBoardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ]
  },
  
]);

function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
