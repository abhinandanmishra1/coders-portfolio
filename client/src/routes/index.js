import Home from "pages/Home";
import About from "pages/About";

import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:username/profile/hackerrank",
        element: <About />,
    }
]);

export default router;
