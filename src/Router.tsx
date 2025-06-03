import { createBrowserRouter } from "react-router";
import { About } from "./pages/About";
import { Layout } from "./pages/Layout";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
    { path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Projects/>
            },
            {
                path: "/about",
                element: <About/>
            },
             {
                path: "/contact",
                element: <Contact/>
             }
        ]
    }
]);
