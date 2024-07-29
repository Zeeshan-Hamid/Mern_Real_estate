import HomePage from "./routes/HomePage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./layout/Layout";
import SignlePage from "./routes/SinglePage/SignlePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/single", element: <SignlePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
