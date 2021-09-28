import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
export const getRoutes = (isAuthorized) => {
    return isAuthorized ?
        [
            {
                path:"/collections",
                component: null
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
            },
            {
                path:"/restore-password",
                component: null
            }
        ];
};