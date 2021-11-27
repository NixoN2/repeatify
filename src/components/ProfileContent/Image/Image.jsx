import Animal from "react-animals";
import {useSelector} from "react-redux";
const Image = () => {
    const {user} = useSelector(state=>state.user);
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <Animal size="200px" circle name={user.animal} color={user.color}/>
            </div>
        </div>
    )
}

export default Image;