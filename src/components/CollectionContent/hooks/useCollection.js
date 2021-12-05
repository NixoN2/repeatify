import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../store";
import {useEffect} from "react";
// import {getCollection} from "../../../utils/testData";
import {useGetCollectionQuery} from "../../../store/service/collections";
export const useCollection = (id) => {
    const dispatch = useDispatch();
    const {currentCollection} = useSelector(state=>state.collections);
    const {data: collection} = useGetCollectionQuery(id);
    useEffect(()=> {
        const getCollectionById = async () => {
            dispatch(actions.setCollection(collection));
        }
        getCollectionById();
    },[collection])
    return {collection:currentCollection};
}

