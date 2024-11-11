import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProfileHeader from "./components/ProfileHeader";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/projoects", element: <Projects /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
