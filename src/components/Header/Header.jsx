import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import "./Header.scss";
const Header = () => {
    return (
            <Navbar color="primary" light className="header">
                <NavbarBrand>Repeatify</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/collections/">Collections</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
    )
}

export default Header;