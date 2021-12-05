import {useHistory} from "react-router-dom";
import {actions} from "../../../store";
import {useDispatch} from "react-redux";
const Collection = ({id,name, author, description,collection}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const redirect = () => {
        dispatch(actions.setCollection(collection));
        history.push(`/collection/${id}`);
    }
    return (
        <div onClick={redirect} className="p-4 bg-carolina-blue hover:bg-prussian-blue cursor-pointer rounded-xl">
            <p className="text-2xl text-gray-100 mb-4">{name}</p>
            <p className="text-lg text-gray-100 mb-4">{description}</p>
            <p className="text-2xl text-gray-100 float-right">{author}</p>
        </div>
    )
}

export default Collection;