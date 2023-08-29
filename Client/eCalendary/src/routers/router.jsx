import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <PrivateRouter>
            (
            <div>
                <h1>Tiene que ir home</h1>
            </div>
            )
        </PrivateRouter>
    },
    {
        path: "/login",
        element: 
        <PublicRouter>
            (
            <div>
                <h1>Tiene que ir home</h1>
            </div>
            )
        </PublicRouter>
    },
    {
        path: "/register",
        element: (
        <div>
            <h1>Tiene que ir register</h1>
        </div>
        )
    },
    {
        path: "/calendario",
        element: (
        <div>
            <h1>Tiene que ir calendario</h1>
        </div>
        )
    },
]);

export default router;