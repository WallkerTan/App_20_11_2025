import { createBrowserRouter } from "react-router-dom";
import Notfound from "./../notFound/Notfound";
import App from "../page/App";
import One from "./../page/One";
import Two from "./../page/Two";
import Three from "./../page/Three";

const app_router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <One />,
            },
            {
                path: "two",
                element: <Two />,
            },
            {
                path: "three",
                element: <Three />,
            },
        ],
    },
    {
        path: "*",
        element: <Notfound />,
    },
]);

export default app_router;
