
import React, {useState} from "react";
import { Form, Modal } from "react-bootstrap";
import {Link} from "react-router-dom"





export const Avtor = () => {



    const [show, setShow] = useState(true);

    const handleClose = () => setShow(true);
    

        return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Для работы с приложением необходимо авторизоваться</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form>
                            <Form.Group controlId="formbasicEmail">
                                <Form.Label> Адрес электронной почты</Form.Label>
                                <Form.Control type="email" placeholder="Введите адрес эл. почты" />
                            </Form.Group>
                            <Form.Group controlId="formbasicPassword">
                                <Form.Label> Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" />
                            </Form.Group>
                        
                            <Form.Group>
                                <button type="button" class="btn btn-warning" ><Link to="/Home" >Авторизоваться</Link> </button>
                            </Form.Group>

                            <main>Если же у вас нет аккаунта, зарагистрируйтесь, нажав соответствующую кнопку</main>
                            <button type="button" class="btn btn-warning"> <Link to="/Regestr" >Зарегистрироваться</Link></button>
                        </Form>
                        
                </Modal.Body>
            </Modal>
        


    
        
            

                
                

        
        </>
            )
        }


export default Avtor;