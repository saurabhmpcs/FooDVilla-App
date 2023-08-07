import ReactDOM from "react-dom";
import Header from "./components/Header";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Help";
import ErrorPage from "./components/ErrorPage";
// import Grocery from "./components/Grocery";s
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import userContext from "./utils/UserContext";
import Help from "./components/Help";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Saurabh Singh",
    };

    setUserName(data.name);
  }, []);

  return (
    <userContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
