import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src="https://image.ibb.co/k7cmVT/logo_w.png" alt="logo" width="150" />
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="">
                        Home link
                         </NavItem>
                    <NavItem eventKey={2} href="https://pixelplex.io" target="blank">
                        Pixelplex link
                       </NavItem>
                </Nav>
            </Navbar>
        )

    }
}
