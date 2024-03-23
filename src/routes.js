import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ForYou from "./pages/ForYou";
import Settings from "./pages/Settings";

//App will render children components.(home, foryou, settings)
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foryou",
        element: <ForYou />,
      },
      {
        path: "/settings/*",
        element: <Settings />,
      },
    ],
  },
];

export default routes;
