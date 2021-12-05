import { Link, useHistory } from "react-router-dom";
import {useState} from "react";
import { useSignUpMutation } from "../../store/service/users";
import { animals, colors } from "../../utils/animals";
const RegisterForm = () => {
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
        history.push("/collections");
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
    return (
        <form className="
            bg-white rounded-lg w-5/6 p-8 px-4
            md:px-12 md:w-4/6
            xl:w-1/2
            2xl:w-1/3 2xl:p-12"
        >
            <p className="
                text-center text-3xl mb-8
                2xl:text-5xl"
            >Register</p>
            <label className="2xl:text-2xl">First Name:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="text"
                name="first_name"
                onChange={handleInput}
                placeholder="Enter your first name here:"
            />
            <label className="2xl:text-2xl">Last Name:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="text"
                name="last_name"
                onChange={handleInput}
                placeholder="Enter your last name here:"
            />
            <label className="2xl:text-2xl">Email:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Enter your email here:"
            />
            <label className="2xl:text-2xl">Password:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="Enter your password here:"
            />
            <label className="2xl:text-2xl">Re-Password:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-16
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="password"
                name="repassword"
                onChange={handleInput}
                placeholder="Enter your password here again:"
            />
            <button
                onClick={toggleRegister}
                className="
                flex mx-auto items-center h-12 w-1/2 justify-center mb-12 bg-unauthorized-bg-color text-white text-xl rounded-xl
                2xl:h-16 2xl:text-3xl 2xl:w-1/2"
            >
                Register
            </button>
            <Link className="
            underline flex mx-auto items-center justify-center
            2xl:text-2xl" to="/">Already have an account?</Link>
        </form>
    )
}

export default RegisterForm;