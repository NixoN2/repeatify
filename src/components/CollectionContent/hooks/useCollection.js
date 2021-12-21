import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../store";
import {useState} from "react";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useGetCollectionQuery, useDeleteCollectionMutation} from "../../../store/service/collections";
export const useCollection = (id) => {
    const [add, setAdd] = useState(false);
    const history = useHistory();
    const [edit, setEdit] = useState(false);
    const {user} = useSelector(state=>state.user);
    const [DeleteCollection] = useDeleteCollectionMutation();
    const toggleEdit = () => setEdit(!edit);
    const toggle = () => {
        setAdd(!add);
    }
    const deleteCollection = () => {
        return DeleteCollection(id)
        .unwrap()
        .then(fulfilled=>{
            history.push('/collections');
        })
        .catch(error=>console.log(error));
    }
    const dispatch = useDispatch();
    const {currentCollection} = useSelector(state=>state.collections);
    const {data: collection, isLoading} = useGetCollectionQuery(id);

    useEffect(()=> {
        const getCollectionById = async () => {
            dispatch(actions.setCollection(collection));
        }
        getCollectionById();
    },[collection])
    const canDelete = user?.auth0Id === currentCollection?.author?.auth0Id;
    return {collection:currentCollection,deleteCollection,canDelete, isLoading, toggle, toggleEdit, add,edit,id:user.auth0Id};
}

