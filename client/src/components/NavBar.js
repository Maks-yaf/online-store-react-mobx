import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";



const NavBar =observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <h2><NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>ByDevice</NavLink></h2>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={()=> navigate(ADMIN_ROUTE)} >Admin</Button>
                        <Button variant={'outline-light'} onClick={()=> navigate(LOGIN_ROUTE)} className={style.button}>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;