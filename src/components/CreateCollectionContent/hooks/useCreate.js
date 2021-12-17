import {useState, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {actions} from "../../../store";
import {useCreateCollectionMutation} from "../../../store/service/collections";

export const useCreate = () => {
    const {user} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [CreateCollection] = useCreateCollectionMutation();
    const [privateCollection,setPrivate] = useState(false);
    const [change, setChange] = useState(true);
    const [created, setCreated] = useState(false);
    const {currentCollection} = useSelector(state=>state.collections);
    const togglePrivate = () => setPrivate(!privateCollection);
    const saveCollection = () => {
        return CreateCollection({userId: user.id, private: privateCollection, name: name})
        .unwrap()
        .then(fulfilled=>{
            dispatch(actions.setCollection({...fulfilled, cards: []}));
            setCreated(true);
        })
        .catch(error=>console.log(error));
    }
    const toggle = () => setChange(!change);
    const onNameChange = (e) => change && setName(e.target.value);
    useEffect(()=> {
        return dispatch(actions.setCollection(null));
    },[])
    return {
        name,
        change,
        togglePrivate,
        toggle,
        onNameChange,
        created,
        saveCollection,
        cards: currentCollection && currentCollection.cards
    }
}
