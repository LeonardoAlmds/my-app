import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;