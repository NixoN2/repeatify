import {useState,useEffect} from "react";
import {useContext} from "react";
import {routesContext} from "../../../App";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
export const useMenu = () => {
    const [open,setOpen] = useState(false);
	const [routesSetter] = useContext(routesContext);
    const {user} = useSelector(state=>state.user);
    const history = useHistory();
	const registered = user?.first_name !== undefined;
	const fullName = `${user?.first_name} ${user?.last_name}`;
    const clickLink = (e) => {
        history.push(e.target.dataset.name);
    }
    const toggle = () => setOpen(!open);
    useEffect(() => {
		if (!open) {
			return;
		}

		const handleEveryClick = (event) => {
			setTimeout(() => {
				if (event.target.closest('[role="menu"]') instanceof Element) {
					return;
				}

				// Hide dropdown
				setOpen(false);
			}, 10);
		};

		setTimeout(() => {
			document.addEventListener('click', handleEveryClick);
		}, 1);

		return () => document.removeEventListener('click', handleEveryClick);
	}, [open]);
    return {toggle,open,registered,routesSetter, clickLink,fullName, id: user?.auth0Id};
}