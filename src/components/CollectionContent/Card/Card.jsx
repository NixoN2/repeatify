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
                    <div className="front text-center text-gray-100 text-2xl p-10 rounded-xl
                    bg-carolina-blue hover:bg-prussian-blue">{name}</div>
                    : <div className="back text-center text-gray-100 text-2xl p-10 rounded-xl
                    bg-carolina-blue hover:bg-prussian-blue">{material}
                </div>}
            </div>
        </div>
    )
}

export default Card;