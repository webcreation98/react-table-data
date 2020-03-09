import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './scss/header.scss'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="headerMain pt-1 pb-1">
            <Container fluid>
              <Row className="align-items-center">
                <Col>
                  <Button variant="dark" size="sm" className="menuBtn">
                    <i className="fa fa-bars"></i>
                  </Button>
                  
                    New <b>Design System</b> Testing
                
                </Col>
                <Col xs={4} md={2} className="text-right">
                  <div className="headerRight">
                    <Button variant="dark" size="sm">
                      <svg
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z"></path>
                      </svg>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
         );
    }
}
 
export default Header;