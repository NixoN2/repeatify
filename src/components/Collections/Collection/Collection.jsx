import {useHistory} from "react-router-dom";
const Collection = ({id,name, author, description, privateCollection}) => {
    const history = useHistory();
    const redirect = () => history.push(`/collection/${id}`)
    return (
        privateCollection ? <div onClick={redirect} className="p-4 bg-carolina-blue hover:bg-prussian-blue cursor-pointer rounded-xl">
            <p className="text-2xl text-gray-100 mb-4">{name}</p>
            <p className="text-lg text-gray-100 mb-4">{description}</p>
            <p className="text-2xl text-gray-100 float-right">{author}</p>
        </div> : null
    )
}

export default Collection;