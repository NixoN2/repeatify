import {useDispatch} from "react-redux";
import {actions} from "../../../store";
import {useEffect} from "react";
import { getCollectionsById } from "../../../utils/testData";
export const useProfile = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCollections =  async () => {
            const data = await getCollectionsById(id);
            dispatch(actions.setCollections(data));
        }
        getCollections();
    },[])
}

