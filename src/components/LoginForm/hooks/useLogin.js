// import { login } from "../../../utils/testData";
import { actions } from "../../../store";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
export const useLogin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handler = (data) => {
        window.localStorage.setItem("id",data.id);
        dispatch(actions.setUser(data));
        history.push("/collections");
    }
    return handler;
}
