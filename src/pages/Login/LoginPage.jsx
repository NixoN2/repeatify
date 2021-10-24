import UnauthorizedLayout from "../../components/UnauthorizedLayout";
import LoginForm from "../../components/LoginForm";
const LoginPage = () => {
    return (
        <UnauthorizedLayout>
            <LoginForm />
        </UnauthorizedLayout>
    )
}

export default LoginPage;

