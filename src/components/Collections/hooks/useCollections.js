import {useState, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useGetCollectionsQuery} from "../../../store/service/collections";
import {useGetUserQuery} from "../../../store/service/users";
import { useAuth0 } from "@auth0/auth0-react";
import {actions} from "../../../store";
export const useCollections = () => {
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const {collections} = useSelector(state=>state.collections);
    // const { user: auth0User } = useAuth0();
    // const { data: dbUser } = useGetUserQuery(auth0User?.sub);
    const dispatch = useDispatch();
    const {data, isLoading} = useGetCollectionsQuery();
    const checkEditors = (editors,id) => {
        return editors.filter(({editor}) => editor.id === id).length > 0;
    }
    useEffect(()=> {
        dispatch(actions.setCollections(data));

    },[data]);
    // useEffect(()=> {
    //     dispatch(actions.setUser(dbUser));
    //     dbUser?.sub && window.localStorage.setItem("auth0Id", dbUser.sub);
    // },[dbUser]);
    const {user} = useSelector(state=>state.user);
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
        collections,
        isLoading
    }
}

