import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AllCast from "./pages/Home/AllCast/AllCast";
import CastDetails from "./pages/Home/CastDetails/CastDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/allCast",
      element: <AllCast></AllCast>,
    },
    {
      path: "/allCast/castDetails/:id",
      element: <CastDetails></CastDetails>,
      loader: ({ params }) => {
        return fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
      },
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
