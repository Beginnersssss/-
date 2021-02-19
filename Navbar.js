import React from "react";
import {Nav, Navbar,  Container, } from "react-bootstrap";
import {Link} from "react-router-dom"
import styled from "styled-components";
import {Button} from "react-bootstrap"

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link{
        color: yellow;
        &:hover{
            color: white
        }
    }
`
export default function NaviBar  ()  {
    
   

    return(
        <>
           

            <Styles>
                <Navbar collapseOnSelect expand= "lg" bg="dark" variant="dark" height="100" width="100">
                    <nav >
                            <img src="images/logo.png" alt= "website logo" height ="80" width="80"/> 
                    </nav>
                    
                   

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mr-auto">
                                
                                
                                <Nav.Link > <Link to="/Home" >ГЛАВНАЯ</Link> </Nav.Link>
                                <Nav.Link> <Link to="/Enter">ВВОД ДАННЫХ</Link> </Nav.Link>
                                <Nav.Link> <Link to="/Graph" >ГРАФИК</Link> </Nav.Link>
                    
                            </Nav>
                            <Nav>
                                <Button variant="primary"><Link to="/"> ВЫЙТИ </Link></Button>
                            </Nav>
                        </Navbar.Collapse>
                     
                    
                </Navbar>
            </Styles>

        </>
    )}