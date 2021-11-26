import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import CollectionPage from "../pages/Collections";
export const getRoutes = (isAuthorized) => {
    return isAuthorized ?
        [
            {
                path:"/",
                component: CollectionPage
            }
        ]
        :
        [
            {
                path: "/",
                component: LoginPage
            },
            {
                path:"/register",
                component: RegisterPage
            }
        ];
};