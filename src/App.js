import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import LogementPage from "./pages/LogementPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", element: <HomePage />, },
      { path: "/about", element: <AboutPage /> },
      { path: "/logement/:id", element: <LogementPage /> },
    ],
  },
  { path: "/not-found", element: <ErrorPage /> },
]);


function App() {
  return <RouterProvider router={router} />;
}


export default App;
