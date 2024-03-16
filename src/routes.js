import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ForYou from "./pages/ForYou";
import Login from "./pages/Login";
import TweetCard from "./components/TweetCard";

//App will render children components.(home, foryou, login)
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
        path: "/login",
        element: <Login />,
      }
    ],
  },
];

export default routes;
