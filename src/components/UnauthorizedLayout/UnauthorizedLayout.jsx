import {Container, Card, CardBody, Row, Col, Jumbotron} from "reactstrap";
import "./UnauthorizedLayout.scss";
const UnauthorizedLayout = ({children}) => {
    return (
        <Container className="bg-primary layout-content-centered">
            <Card className="card-container">
                <CardBody>
                    {children}
                </CardBody>
            </Card>
        </Container>
    )
}
export default UnauthorizedLayout;