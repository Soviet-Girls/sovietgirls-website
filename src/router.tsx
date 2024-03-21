import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Main />
            },
        ]
    }
]);

export default router;