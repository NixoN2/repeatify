import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useGetUserQuery} from "../../store/service/users";
import { useAuth0 } from "@auth0/auth0-react";
import {actions} from "../../store";
export const useAuth0Authorization = () => {
    const { user: auth0User } = useAuth0();
    const { data: dbUser, isLoading} = useGetUserQuery(auth0User?.sub, {skip:!auth0User});
    const dispatch = useDispatch();
    useEffect(()=> {
        dbUser?.auth0Id && dispatch(actions.setUser(dbUser));
        dbUser?.auth0Id && window.localStorage.setItem("auth0Id", dbUser.auth0Id);
    },[isLoading,dbUser?.auth0Id]);
}