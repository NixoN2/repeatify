import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import "./RegisterForm.scss";
const RegisterForm = () => {
    return (
        <Form className="rounded-lg p-4">
            <h3 className="text-center mb-3">Register</h3>
            <FormGroup className="mb-4">
                <Label for="registerEmail">Email</Label>
                <Input type="email" name="email" id="registerEmail" placeholder="Enter your email:"/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label for="registerPassword">Password</Label>
                <Input type="password" name="pass" id="registerPassword" placeholder="Enter your Password:"/>
            </FormGroup>
            <FormGroup className="mb-5">
                <Label for="rePassword">Re-Enter Password</Label>
                <Input type="password" name="pass" id="rePassword" placeholder="Re-Enter your Password:"/>
            </FormGroup>
            <FormGroup className="content-centered">
                <Button className="bg-primary block-50 mb-2">Register</Button>
                <Link to="/">Already have an account?</Link>
            </FormGroup>
        </Form>
    )
}

export default RegisterForm;