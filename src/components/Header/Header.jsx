import {useState} from "react";
import {useSelector} from "react-redux";
import { Icon } from '@iconify/react';
import  arrowDownSLine from '@iconify-icons/ri/arrow-down-s-line';
import arrowUpSLine from '@iconify-icons/ri/arrow-up-s-line';
import classnames from "classnames";
import {useHistory} from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false);
    const {user} = useSelector(state=>state.user);
    const history = useHistory();
    const clickLink = (e) => {
        history.push(e.target.dataset.name);
    }
    return (
            <div className="fixed filter drop-shadow-xl flex justify-between items-center bg-white w-screen p-4">
                <p className="text-carolina-blue text-3xl">Repeatify</p>
                <div onClick={()=>{setOpen(!open)}}>
                    <p className="flex text-2xl
                    transition duration-300 ease-in-out text-carolina-blue hover:text-prussian-blue
                    cursor-pointer">{`${user.first_name} ${user.last_name}`}<Icon className="mt-1" icon={open ? arrowUpSLine : arrowDownSLine}/></p>
                    <div className={classnames({"-top-64": !open}, "fixed transition duration-300 ease-in-out top-16 w-48 filter drop-shadow-xl")}>
                        <ul className="flex justify-center items-center flex-col bg-white border border-gray-200">
                            <li onClick={clickLink} data-name="/profile" className="text-carolina-blue text-lg p-2 hover:bg-gray-100 w-full text-center cursor-pointer">Profile</li>
                            <li onClick={clickLink} data-name="/collection" className="text-carolina-blue text-lg p-2 hover:bg-gray-100 w-full text-center cursor-pointer">Collections</li>
                            <li onClick={clickLink} data-name="/" className="text-carolina-blue text-lg p-2 hover:bg-gray-100 w-full text-center cursor-pointer">Exit</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Header;