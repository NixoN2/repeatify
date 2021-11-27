import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import Profile from "../pages/Profile";
import CollectionPage from "../pages/Collections";
import Collection from "../pages/Collection";
export const getRoutes = (isAuthorized) => {
    return isAuthorized ?
        [
            {
                path:"/",
                component: CollectionPage
            },
            {
                path: "/profile/:id",
                component: Profile
            },
            {
                path: "/collection/:id",
                component: Collection
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