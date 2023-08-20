import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
      <Container>
          <Navbar.Brand href="/">Bag of Trigs</Navbar.Brand>
      </Container>
    </Navbar>
  )
};