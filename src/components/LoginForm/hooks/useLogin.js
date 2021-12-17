// import { login } from "../../../utils/testData";
import { actions } from "../../../store";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
// import { useLoginMutation } from "../../../store/service/auth";
import { useState, useContext } from 'react';
import { routesContext } from "../../../App";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
export const useLogin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loginWithRedirect } = useAuth0();
    // const [Login] = useLoginMutation()
    // const [form, setForm] = useState({email: "", password: ""});
    const [routesSetter] = useContext(routesContext);
    // const handleInput = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value});
    // }
    // const handler = (data) => {
    //     window.localStorage.setItem("id",data.user.id);
    //     dispatch(actions.setUser({...data.user}));
    //     dispatch(actions.setToken(data.token));
    //     history.push("/collections");
    // }
    // const toggleLogin = (e) => {
    //     e.preventDefault();
    //     routesSetter(true);
    //     return Login({email: form.email, password: form.password})
    //     .unwrap()
    //     .then(fulfilled=>handler(fulfilled))
    //     .catch(error=>console.log(error));
    // }
    const toggleAuth0Login = async (e) => {
        e.preventDefault();
        window.localStorage.setItem("redirected", true);
        routesSetter(true);
        loginWithRedirect()
    }

    return {toggleAuth0Login};
}
