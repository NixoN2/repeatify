import {Container} from "reactstrap";
import Header from "../Header";
const AuthorizedLayout = ({children}) => {
    return (
        <div>
            <Header />
            <Container className="layout-content-centered">
                {children}
            </Container>
        </div>
    )
}
export default AuthorizedLayout;