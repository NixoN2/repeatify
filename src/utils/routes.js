import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import Profile from "../pages/Profile";
import CollectionPage from "../pages/Collections";
import Collection from "../pages/Collection";
import CreateCollection from "../pages/CreateCollection";
export const getRoutes = (isAuthorized) => {
    return isAuthorized ?
        [
            {
                path: "/",
                component: LoginPage
            },
            {
                path:"/collections",
                component: CollectionPage
            },
            {
                path: "/profile/:id",
                component: Profile
            },
            {
                path: "/collection/:id",
                component: Collection
            },
            {
                path: "/create",
                component: CreateCollection
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
                path: "/profile/:id",
                component: Profile
            },
            {
                path: "/collection/:id",
                component: Collection
            },
            {
                path:"/collections",
                component: CollectionPage
            },
        ];
};