import {useState} from "react";
import {useAddEditorMutation, useDeleteEditorMutation} from "../../../store/service/collections";
import {useSelector} from "react-redux";
export const useEditor = () => {
    const {currentCollection} = useSelector(state=>state.collections);
    const {user} = useSelector(state=>state.user);
    const [editors, setEditors] = useState(currentCollection?.editors);
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const [AddEditor] = useAddEditorMutation();
    const [DeleteEditor] = useDeleteEditorMutation();
    const addEditor = async () => {
        return AddEditor({collectionId: currentCollection.id,email: search})
        .unwrap()
        .then(fulfilled => {
            console.log(fulfilled);
            setEditors([...editors, {editor:fulfilled}])
        })
        .catch(error => console.log(error));
    }
    const deleteEditor =  async (userId) => {
        return DeleteEditor({userId, collectionId: currentCollection.id})
        .unwrap()
        .then(fulfilled => {
            console.log(fulfilled);
            setEditors([...editors.filter(({editor})=> editor?.auth0Id !== userId)])
        })
        .catch(error => console.log(error));
    }
    return {
        search,
        deleteEditor,
        onSearch,
        addEditor,
        editors
    }
}