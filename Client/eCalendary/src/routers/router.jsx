import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../componets/Navbar";
const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <PublicRouter>
            <Navbar/>
        </PublicRouter>
    },
    {
        path: "/login",
        element: 
        <PrivateRouter>
            (
            <div>
                <h1>Tiene que ir LOGIN</h1>
            </div>
            )
        </PrivateRouter>
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