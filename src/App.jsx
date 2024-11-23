import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from "./components/Projects";
import Home from "./components/Home";
import Body from "./components/Body";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/experience", element: <Experience /> },
        { path: "/contact", element: <Contact /> },
        { path: "/blog", element: <Blog /> },
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
