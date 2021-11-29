import {useState} from "react";
import classnames from "classnames";
import "./card.css";
const Card = ({id,material,name}) => {
    const [open,setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <div className={classnames({"hover": !open},"flip-container")} onClick={toggle}>
            <div className="flipper">
                {open ?
                    <div className="front text-gray-100 text-2xl w-72 cursor-pointer h-40 flex flex-col justify-center items-center p-2 rounded-xl
                    bg-carolina-blue hover:bg-prussian-blue">{name}</div>
                    : <div className="back text-gray-100 text-2xl w-72 h-40 cursor-pointer flex flex-col justify-center items-center p-2 rounded-xl
                    bg-carolina-blue hover:bg-prussian-blue">{material}
                </div>}
            </div>
        </div>
    )
}

export default Card;