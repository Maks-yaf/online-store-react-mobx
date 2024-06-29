import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import style from './Auth.module.css'
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className={style.authContainer}
            style={{height: window.innerHeight - 1000}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className={'m-auto'}>{isLogin ? "Login" : "Registration"}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={"mt-3"}
                        placeholder="put email..."
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="put password..."
                    />
                    <Row>
                        <div className={style.row}>
                            {isLogin ?
                                <div>
                                    Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Please register on the site</NavLink>
                                </div>
                                :
                                <div>
                                    Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                                </div>
                            }

                            <Button
                                variant="outline-success"
                                type="submit"
                            >{isLogin ? 'Login' : 'Register'}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;