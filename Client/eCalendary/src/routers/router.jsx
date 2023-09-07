import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import { createBrowserRouter } from "react-router-dom";
import Calendar from "../feature/Calendar/pages/Calendar";
import Layout from "../componets/Layaout";
import Business from "../feature/business/pages/business";
import { PATH_BUSINESS, PATH_CALENDAR, PATH_LOGIN, PATH_REGISTER } from "./routerPaths";
import Login from "../feature/Sesion/pages/Login";
import Register from "../feature/Sesion/pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <p>Error</p>,

        children:[
            {
                index: true,
                element: <PublicRouter><div>Landing</div></PublicRouter>,
            },
            {
                path: PATH_BUSINESS,
                element: 
                <PrivateRouter><Business /></PrivateRouter>
            },
            {
                path: PATH_CALENDAR,
                element: <PrivateRouter><Calendar/></PrivateRouter>
            },
        ]
    },
    {
        path: PATH_REGISTER,
        element: <PublicRouter><Register/></PublicRouter>
    },
    {
        path: PATH_LOGIN,
        element: 
        <PublicRouter><Login /></PublicRouter>
    },
    {
        path:"*",
        element: <p>vuelve</p>
    },
]);

export default router;