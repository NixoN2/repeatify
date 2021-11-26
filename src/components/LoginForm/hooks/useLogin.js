import { login } from "../../../utils/testData";
import { actions } from "../../../store";
import {useDispatch} from "react-redux";
export const useLogin = () => {
    const dispatch = useDispatch();
    const handler = async (email) => {
        const user = await login(email).then(data => data);
        dispatch(actions.setUser(user));
    }
    return handler;
}

