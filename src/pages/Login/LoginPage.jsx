import UnauthorizedLayout from "../../components/UnauthorizedLayout";
import LoginForm from "../../components/LoginForm";
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../store";
import {useHistory} from "react-router-dom";
const LoginPage = () => {
    const history = useHistory();
    const {user, getAccessTokenSilently} = useAuth0();
    const dispatch = useDispatch();
    useEffect(()=>{
        (async () => {
            if (window.localStorage.getItem("redirected")) {
                if (!window.localStorage.getItem("token")) {
                    try {
                        const token = await getAccessTokenSilently({audience: "https://repeatify.herokuapp.com"});
                        dispatch(actions.setToken(token))
                        if (token?.length > 0){
                            history.push("/collections");
                            window.localStorage.setItem("token",token);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                } else {
                    history.push('/collections');
                }
            }

            })();
    },[user, getAccessTokenSilently]);
    return (
        <UnauthorizedLayout>
            <LoginForm />
        </UnauthorizedLayout>
    )
}

export default LoginPage;

