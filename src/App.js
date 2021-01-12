import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, Nav, Button, Carousel, FormControl, Container, Row, Col, ListGroup } from 'react-bootstrap';
import SALMON from './images/SALMON.jpg'
import COFFEE from './images/COFFEE.jpg'
import DRINKS from './images/DRINKS.jpg'
function Bar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            width="75%"
            src={SALMON}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
           width="75%"
            src={COFFEE}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
           width="75%"
            src={DRINKS}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
function Btn() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}

          </Col>
          <Col>
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
          </Col>
          <Col>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>{' '}
          </Col>
          <Col>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  )
}
function LiGroup() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>No style</ListGroup.Item>
              <ListGroup.Item variant="primary">Primary</ListGroup.Item>
              <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
              <ListGroup.Item variant="success">Success</ListGroup.Item>
              <ListGroup.Item variant="danger">Danger</ListGroup.Item>
              <ListGroup.Item variant="warning">Warning</ListGroup.Item>
              <ListGroup.Item variant="info">Info</ListGroup.Item>
              <ListGroup.Item variant="light">Light</ListGroup.Item>
              <ListGroup.Item variant="dark">Dark</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

    </>
  );
}



function App() {
  return (
    <>
      <Bar />
      <hr></hr>
      <Caro />
      <hr></hr>
      <Btn />
      <hr></hr>
      <LiGroup />
    </>
  );
}

export default App;
