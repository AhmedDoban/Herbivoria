// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBAr = () => {
//   return (  
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/home">School</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="w" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
//         <Link className="nav-link" to="/Students">Student</Link>
//       </div>
//     </div>
//   </div>
// </nav>
//   );
// }
 
// export default NavBAr;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Nav,Container,NavDropdown,Navbar,Button} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

const NavBAr = (props) => {
  let cout =props.Count1+props.Count2
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Brand href="/home" style={{color:'red'}}>MARCKET</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">HOME</Nav.Link>
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Food" >Food</NavDropdown.Item>
        <NavDropdown.Item href="/Drinks"disabled>Drinks</NavDropdown.Item>
        <NavDropdown.Item href="/Dessert"disabled>Dessert</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action" disabled>Comming Soon</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/signUp">Sign Up</Nav.Link>
      <Nav.Link href="/login">Sign In</Nav.Link>
    </Nav>
    
    <Link to="/cart">
    <Button variant="outline-primary">
    <i class="fas fa-shopping-cart" >
      </i>
      {cout}
      </Button>{''}
      </Link>
  
  </Navbar.Collapse>
  </Container>
</Navbar>

    </React.Fragment>
    );
}
 
export default NavBAr ;