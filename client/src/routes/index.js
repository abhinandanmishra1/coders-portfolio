import Home from "components/Home";
import About from "components/About";

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
