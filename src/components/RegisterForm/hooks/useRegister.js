import { useHistory } from "react-router-dom";
import {useState} from "react";
import { useSignUpMutation } from "../../../store/service/auth";
import { animals, colors } from "../../../utils/animals";
export const useRegister = () => {
    const history = useHistory();
    const [form, setForm] = useState({email: "",password: "",first_name: "",last_name:"",repassword: ""});
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const getRandomItem = (array) => {
        return array[getRandomInt(0,array.length-1)];
    }
    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const [ SignUp ] = useSignUpMutation();
    const toggleRegister = (e) => {
        e.preventDefault();
        history.push("/");
        if (form.password === form.repassword){
            return SignUp({
                email: form.email,
                password: form.password,
                role: "user",
                first_name: form.first_name,
                last_name: form.last_name,
                color: getRandomItem(colors),
                animal: getRandomItem(animals)
            })
                .unwrap()
            .then(fulfilled => console.log(fulfilled))
            .catch(error => console.log(error))
        }
    }
    return {handleInput, form, toggleRegister};
}