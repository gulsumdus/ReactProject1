import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <div>
        <Navbar {...this.props}>
          <NavbarBrand href="/">React Application</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/form1">Form Demo 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/form2">Form Demo 2</NavLink>
              </NavItem>
              <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart} />{/*Data dirilling(app.js'den CartSummary'e) */}
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
