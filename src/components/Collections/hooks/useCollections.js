import {useState} from "react";
import {useSelector} from "react-redux";
import {useGetCollectionsQuery} from "../../../store/service/collections";
export const useCollections = () => {
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const {user} = useSelector(state=>state.user);
    const {data: collections} = useGetCollectionsQuery();
    const filtered = collections && collections.filter(collection =>
        (collection.name.toLowerCase().includes(search) ||
        collection.author.first_name.toLowerCase().includes(search) ||
        collection.author.last_name.toLowerCase().includes(search)) &&
        (!collection.private || collection.author.id === user.id)
    );
    return {
        search,
        onSearch,
        filtered,
        collections
    }
}

