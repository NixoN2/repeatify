import UnauthorizedLayout from "../../components/UnauthorizedLayout";
import RegisterForm from "../../components/RegisterForm";
const RegisterPage = () => {
    return (
        <UnauthorizedLayout>
            <RegisterForm />
        </UnauthorizedLayout>
    )
}
export default RegisterPage;