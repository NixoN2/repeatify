import {useDispatch} from "react-redux";
import {actions} from "../../../store";
import {useEffect} from "react";
import {getCollection} from "../../../utils/testData";
export const useCollection = (id) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const getCollectionById = async () => {
            const data = await getCollection(id).then(data=>data);
            dispatch(actions.setCollection(data));
        }
        getCollectionById();
    },[])
}

