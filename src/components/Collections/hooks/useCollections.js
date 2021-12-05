import {useState, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useGetCollectionsQuery} from "../../../store/service/collections";
import {actions} from "../../../store";
export const useCollections = () => {
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const {user} = useSelector(state=>state.user);
    const {collections} = useSelector(state=>state.collections);
    const dispatch = useDispatch();
    const {data} = useGetCollectionsQuery();
    const checkEditors = (editors,id) => {
        return editors.filter(({editor}) => editor.id === id).length > 0;
    }
    useEffect(()=> {
        dispatch(actions.setCollections(data));
    },[data])
    const filtered = collections?.length > 0 && collections.filter(collection =>
        (collection.name.toLowerCase().includes(search) ||
        collection.author.first_name.toLowerCase().includes(search) ||
        collection.author.last_name.toLowerCase().includes(search)) &&
        (!collection.private || collection.author.id === user.id || checkEditors(collection.editors, user.id))
    );
    return {
        search,
        onSearch,
        filtered,
        collections
    }
}

