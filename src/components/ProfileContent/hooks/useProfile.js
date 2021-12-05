import {useDispatch} from "react-redux";
import {actions} from "../../../store";
import {useEffect} from "react";
import { getCollectionsById,getUser } from "../../../utils/testData";
import { useGetUserQuery } from "../../../store/service/users";
export const useProfile = (id) => {
    const dispatch = useDispatch();
    const {data} = useGetUserQuery(id);
    // useEffect(() => {
    //     const getCollections =  async () => {
    //         const data = await getCollectionsById(id);
    //         dispatch(actions.setCollections(data));
    //     }
    //     const getUserData = async () => {
    //         const data = await getUser(id);
    //         dispatch(actions.setCurrentUser(data));
    //     }
    //     getCollections();
    //     getUserData();
    // },[])
    return  {
        animal: data?.animal,
        color: data?.color,
        first_name: data?.first_name,
        last_name: data?.last_name,
        collections: data?.author,
        email: data?.email
    }
}

