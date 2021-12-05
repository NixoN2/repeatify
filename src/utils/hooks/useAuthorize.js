import {actions} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {useGetUserQuery} from "../../store/service/users";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
export const useAuthorize = () =>  {
    const history = useHistory();
    const {user} = useSelector(state=>state.user);
    const {data} = useGetUserQuery(user?.id);
    const dispatch = useDispatch();

    useEffect(()=> {
        const authorize = (data) => {
            dispatch(actions.setUser(data));
            history.push("/collections");
        }
        data && authorize(data);
    },[data])
    return user?.email ?? "";
}