import { Link } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";
const RegisterForm = () => {
    const {handleInput, form, toggleRegister} = useRegister();
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
                value={form.first_name}
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
                value={form.last_name}
                onChange={handleInput}
                placeholder="Enter your last name here:"
            />
            <label className="2xl:text-2xl">Email:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="email"
                value={form.email}
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
                value={form.password}
                onChange={handleInput}
                placeholder="Enter your password here:"
            />
            <label className="2xl:text-2xl">Re-Password:</label>
            <input
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-16
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="password"
                value={form.repassword}
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