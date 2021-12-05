import {useState} from "react";
import {useAddEditorMutation} from "../../../store/service/collections";
import {useSelector} from "react-redux";
export const useEditor = () => {
    const {currentCollection} = useSelector(state=>state.collections);
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const [AddEditor] = useAddEditorMutation()
    const addEditor = () => {
        return AddEditor(currentCollection.id,{email: search})
        .unwrap()
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error));
    }
    return {
        search,
        onSearch,
        addEditor
    }
}