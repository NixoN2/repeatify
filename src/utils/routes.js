import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
export const getRoutes = (isAuthorized) => {
    return isAuthorized ?
        [
            {
                path: "/login",
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
        ]
        :
        [
            {
                path:"/collections",
                component: null
            }
        ];
};