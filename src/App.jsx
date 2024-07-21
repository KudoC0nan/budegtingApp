import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import { dashboardLoader } from "./loaders/dashBoardLoader";
import Error from "./pages/Error";
import Main from "./layouts/Main";
import { mainLoader } from "./loaders/mainLoader";

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
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
  
]);

function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
