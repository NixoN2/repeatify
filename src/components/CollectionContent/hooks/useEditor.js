import {useState} from "react";
import {useAddEditorMutation} from "../../../store/service/collections";
import {useSelector} from "react-redux";
export const useEditor = () => {
    const {currentCollection} = useSelector(state=>state.collections);
    const [editors, setEditors] = useState(currentCollection?.editors);
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const [AddEditor] = useAddEditorMutation()
    const addEditor = async () => {
        return AddEditor({collectionId: currentCollection.id,email: search})
        .unwrap()
        .then(fulfilled => setEditors([...editors, fulfilled]))
        .catch(error => console.log(error));
    }
    return {
        search,
        onSearch,
        addEditor,
        editors
    }
}