import { login } from "../../../utils/testData";
import { actions } from "../../../store";
import {useDispatch} from "react-redux";
import { animals, colors } from "../../../utils/animals";
export const useLogin = () => {
    const dispatch = useDispatch();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const getRandomItem = (array) => {
        return array[getRandomInt(0,array.length-1)];
    }
    const handler = async (email) => {
        const user = await login(email).then(data => data);
        dispatch(actions.setUser({...user, animal:getRandomItem(animals), color: getRandomItem(colors)}));
    }
    return handler;
}
