import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useCreateCardMutation} from "../../../store/service/collections";
import {actions} from "../../../store";
import {notify} from "../../Notification/Notification";
export const useCreateCard = () => {
    const [form,setForm] = useState({name: "",material:""});
    const dispatch = useDispatch();
    const {currentCollection} = useSelector(state=>state.collections);
    const [CreateCard] = useCreateCardMutation();
    const addCard = () => {
        return CreateCard({collectionId: currentCollection.id, name: form.name, material: form.material})
        .unwrap()
        .then(fulfilled => {
            notify({title: "Completed", message: "Card added to the collection"});
            dispatch(actions.setCollection({...currentCollection, cards: [...currentCollection.cards, fulfilled]}));
            setForm({name: "",material:""})
        })
        .catch(error=> notify({title: "Error", message: error.message}));
    }
    const fieldOnChange=(e)=>setForm({...form, [e.target.name]: e.target.value});
    return {
        fieldOnChange,
        name: form.name,
        material: form.material,
        addCard
    }
}