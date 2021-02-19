
import React, {useState} from "react";
import { Form, Modal } from "react-bootstrap";
import {Link} from "react-router-dom"





export const Regestr = () => {



    const [show, setShow] = useState(true);

    const handleClose = () => setShow(true);
    

        return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form>
                            <Form.Group controlId="formbasicEmail">
                                <Form.Label> Адрес электронной почты</Form.Label>
                                <Form.Control type="email" placeholder="Введите адрес эл. почты" />
                            </Form.Group>
                            <Form.Group controlId="formbasicPassword">
                                <Form.Label> Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Придумайте пароль" />
                            </Form.Group>
                        
                            
                            <button type="button" class="btn btn-warning"> <Link to="/" >Зарегистрироваться</Link></button>
                        </Form>
                        
                </Modal.Body>
            </Modal>
        


    
        
            

                
                

        
        </>
            )
        }


export default Regestr;