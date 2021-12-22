import {useState} from "react";
import {useAddEditorMutation, useDeleteEditorMutation} from "../../../store/service/collections";
import {notify} from "../../Notification/Notification";
import {useSelector} from "react-redux";
export const useEditor = () => {
    const {currentCollection} = useSelector(state=>state.collections);
    const [editors, setEditors] = useState(currentCollection?.editors);
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    const [AddEditor] = useAddEditorMutation();
    const [DeleteEditor] = useDeleteEditorMutation();
    const addEditor = async () => {
        return AddEditor({collectionId: currentCollection.id,email: search})
        .unwrap()
        .then(fulfilled => {
            notify({title: "Completed", message: "Editor added to the collection"});
            setEditors([...editors, {editor:fulfilled}])
            setSearch("");
        })
        .catch(error => notify({title: "Error", message:error.message}));
    }
    const deleteEditor =  async (userId) => {
        return DeleteEditor({userId, collectionId: currentCollection.id})
        .unwrap()
        .then(fulfilled => {
            notify({title: "Completed", message: "Editor deleted from the collection"});
            setEditors([...editors.filter(({editor})=> editor?.auth0Id !== userId)])
        })
        .catch(error => notify({title: "Error",message:error.message}));
    }
    return {
        search,
        deleteEditor,
        onSearch,
        addEditor,
        editors
    }
}