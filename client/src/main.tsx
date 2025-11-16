import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { stores } from "./store/Store";
import { Provider } from "react-redux";
import app_router from "./router/index";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={stores}>
            <RouterProvider router={app_router} />
        </Provider>
    </StrictMode>
);
