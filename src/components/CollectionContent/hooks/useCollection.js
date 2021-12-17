import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../store";
import {useState} from "react";
import {useEffect} from "react";
import {useGetCollectionQuery} from "../../../store/service/collections";
export const useCollection = (id) => {
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const {user} = useSelector(state=>state.user);
    const toggleEdit = () => setEdit(!edit);
    const toggle = () => {
        setAdd(!add);
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
    return {collection:currentCollection, isLoading, toggle, toggleEdit, add,edit,id:user.auth0Id};
}

