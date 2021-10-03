import {Container, Card, CardBody} from "reactstrap";
import "./UnauthorizedLayout.scss";
const UnauthorizedLayout = ({children}) => {
    return (
        <Container className="bg-primary layout-content-centered-full-screen">
            <Card className="card-container">
                <CardBody>
                    {children}
                </CardBody>
            </Card>
        </Container>
    )
}
export default UnauthorizedLayout;