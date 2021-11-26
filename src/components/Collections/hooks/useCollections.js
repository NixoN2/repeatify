import { actions } from "../../../store";
import { useDispatch } from "react-redux";
import { getCollections } from "../../../utils/testData";
import { useEffect } from "react";
export const useCollections = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handler = async () => {
            const collections = await getCollections();
            dispatch(actions.setCollections(collections));
        }
        handler();
    },[])
}

