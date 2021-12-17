import { useLogin } from "./hooks/useLogin";

const LoginForm = () => {
    const {toggleAuth0Login} = useLogin();
    return (
        <form className="bg-white rounded-lg w-5/6 p-8 px-4
            md:px-12 md:w-4/6
            xl:w-1/2
            2xl:w-1/3 2xl:p-12"
        >
            <p className="text-center text-3xl mb-8 2xl:text-5xl">Login</p>
            {/* <label className="2xl:text-2xl">Email:</label>
            <input
                onChange={handleInput}
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-4
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter your email here:"
            />
            <label className="2xl:text-2xl">Password:</label>
            <input
                onChange={handleInput}
                className="
                w-full h-12 pl-4 border-2 rounded-md border-black mb-16
                2xl:h-14 2xl:text-2xl 2xl:mb-8"
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter your password here:"
            />
            <button
                onClick={toggleLogin}
                className="
                    flex mx-auto items-center h-12 w-1/2 justify-center mb-6
                    bg-unauthorized-bg-color text-white text-xl rounded-xl
                    2xl:h-16 2xl:text-2xl 2xl:w-1/2"
            >
                Login
            </button>
            <p className="text-center text-xl mb-6">or</p> */}
            <button
                onClick={toggleAuth0Login}
                className="
                    flex mx-auto items-center h-12 w-1/2 justify-center mb-6
                    bg-unauthorized-bg-color text-white text-xl rounded-xl
                    2xl:h-16 2xl:text-2xl 2xl:w-1/2"
            >
                Login with Auth0
            </button>
            {/* <Link
                className="underline flex mx-auto
                items-center justify-center
                2xl:text-2xl"
                to="/register"
            >Don't have an account?</Link> */}
        </form>
    )
}

export default LoginForm;