import React, {useContext} from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import {AuthContext} from "../context/AuthContext"

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push("/")
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <span href="/" className="brand-logo">ааа</span>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <Nav.Link > <Link to="/Home" >ГЛАВНАЯ</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Enter">ВВОД ДАННЫХ</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Graph" >ГРАФИК</Link> </Nav.Link>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}
