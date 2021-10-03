import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext} from "../../App";
import { Link, useHistory} from "react-router-dom";
import "./LoginForm.scss";
const LoginForm = () => {
    const history = useHistory();
    const toggleAuth = useContext(AuthContext);
    console.log(toggleAuth);
    const toggleLogin = () => {
        toggleAuth();
        history.push("/collections");
    }
    return (
        <Form className="rounded-lg p-4">
            <h3 className="text-center mb-3">Login</h3>
            <FormGroup className="mb-4">
                <Label for="loginEmail">Email</Label>
                <Input type="email" name="email" id="loginEmail" placeholder="Enter your email:"/>
            </FormGroup>
            <FormGroup className="mb-5">
                <Label for="loginPassword">Password</Label>
                <Input type="password" name="pass" id="loginPassword" placeholder="Enter your Password:"/>
            </FormGroup>
            <FormGroup className="content-centered">
                <Button onClick={toggleLogin} className="bg-primary block-50 mb-2">Login</Button>
                <Link to="/register">Don't have an account?</Link>
            </FormGroup>
        </Form>
    )
}

export default LoginForm;