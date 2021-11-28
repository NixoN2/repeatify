import {useState,useEffect} from "react";
export const useMenu = () => {
    const [open,setOpen] = useState(false);
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
    return {toggle,open};
}