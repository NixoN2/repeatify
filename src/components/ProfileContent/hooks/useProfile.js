import { useGetUserQuery } from "../../../store/service/users";
import { useSelector } from "react-redux";
export const useProfile = (id) => {
    const {user} = useSelector(state=>state.user);
    const {data,isLoading} = useGetUserQuery(id);
    const userCollections = data?.author.filter(collection=>collection.author.id === user.id ? true : !collection.private);
    return  {
        animal: data?.animal,
        color: data?.color,
        picture: data?.picture,
        first_name: data?.first_name,
        last_name: data?.last_name,
        collections: userCollections,
        email: data?.email,
        isLoading
    }
}

