import { Icon } from '@iconify/react';
import  arrowDownSLine from '@iconify-icons/ri/arrow-down-s-line';
import arrowUpSLine from '@iconify-icons/ri/arrow-up-s-line';
import classnames from "classnames";
import { useMenu } from "./hooks/useMenu";
import MenuLink from "./MenuLink";
import {useAuth0} from "@auth0/auth0-react";
import {notify} from "../Notification/Notification";
const Header = () => {
    const {toggle, open,registered, routesSetter, clickLink,fullName,id} = useMenu();
    const {logout} = useAuth0();
    // const logout = async () => {
    //     const domain = "nixonweb.eu.auth0.com";
    //     const clientId = "qzmEQfE2dizUz7xDGO5nboUbE4OZkPZO";
    //     const returnTo = "http://localhost:3000";
    //     const response = await fetch (
    //         `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`,
    //         { redirect: "manual"}
    //     );
    //     window.location.replace(response.url);
    // };
    return (
            <div className="fixed filter drop-shadow-xl flex justify-between items-center bg-white w-screen p-4">
                <p className="text-carolina-blue text-3xl">Repeatify</p>
                <div onClick={toggle}>
                    {
                        registered ?
                        <p className="flex text-2xl transition duration-300
                        ease-in-out text-carolina-blue
                        hover:text-prussian-blue cursor-pointer">{fullName}<Icon className="mt-1" icon={open ? arrowUpSLine : arrowDownSLine}/></p>
                        : <div className="mr-16 flex text-2xl transition duration-300
                        ease-in-out text-carolina-blue
                        hover:text-prussian-blue cursor-pointer">Guest</div>
                    }
                    <div role="menu" className={classnames({"-top-64 ": !open}, "fixed transition duration-300 ease-in-out top-16 right-4 w-48 filter drop-shadow-xl")}>
                        <ul className="flex justify-center items-center flex-col bg-white border border-gray-200">
                            <MenuLink onClick={clickLink} id={id} registered={registered} tag="login" name={'/'}>Login</MenuLink>
                            <MenuLink onClick={clickLink} id={id} registered={registered} name={'/register'}>Register</MenuLink>
                            <MenuLink onClick={clickLink} id={id} registered={registered} name="/collections">Collections</MenuLink>
                            <MenuLink onClick={clickLink} id={id} registered={registered} name={`/profile/${id}`}>Profile</MenuLink>
                            <MenuLink onClick={clickLink} id={id} registered={registered} name="/create">Create Collection</MenuLink>
                            <MenuLink onClick={(e) => {
                                window.localStorage.removeItem("auth0Id");
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("redirected");
                                notify({title: "Completed", message: "You are logged out"});
                                routesSetter(false);
                                logout();
                                clickLink(e)}}
                            name="/" tag="logout">Logout</MenuLink>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Header;