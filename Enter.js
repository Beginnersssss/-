import React, { useState } from 'react';
import { Modal, Form} from "react-bootstrap"
import {Button} from "react-bootstrap"




export const Enter = () => {
    
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    
 

    return(
    <>
      
        <h3>И мы продолжаем работу с нашим приложением.</h3>
        <h3>Здесь Вам понадобится всего лишь ввести свою массу</h3>
        <Form>
                    <Form.Group controlId="">
                        <Form.Label> </Form.Label>
                        <Form.Control type="" placeholder="Введите массу Вашего тела в килограммах" />
                    </Form.Group>
                    
                    <button type="button" class="btn btn-warning"> Подтвердить </button>
        </Form>
                <main> 

                </main>
                
                <main>
                     <h1> </h1>
                     <h1> </h1>
                </main>
                <h3>...Ах да, совсем забыл. Вы можете выбрать период из предложенных ниже или выбрать срок, который хотите</h3>
        <h3>Неделя, Две недели, Месяц, Два месяца, Полгода, Год</h3>
        <h3>Если вы выбрали период из списка выше, просто нажмите нужную кнопку:</h3>
        
        <Form>
                    <Form.Group controlId="">
                        <Form.Label> </Form.Label>
                        <Button  type="button" class="btn btn-info" className="mr-2"> Неделя </Button>
                        <Button type="button" class="btn btn-info" className="mr-2"> Две недели </Button>
                        <Button type="button" class="btn btn-info" className="mr-2"> Месяц </Button>
                        
                    </Form.Group>

                    <Form.Group className="mr-2">
                        <Button type="button" class="btn btn-info" className="mr-2"> Два месяца </Button>
                        <Button type="button" class="btn btn-info" className="mr-2"> Полгода </Button>
                        <Button type="button" class="btn btn-info" className="mr-2"> Год </Button>
                    </Form.Group>

                    <main>
                     <h1> </h1>
                     <h1> </h1>
                </main>

                    
                    
        </Form>

        <main>
                     <h1> </h1>
                     <h1> </h1>
                </main> 
         <h3> Если же Вам хочется выбрать другой период, окна ввода к вашим услугам</h3>  
         <main>
                     <h1> </h1>
                     <h1> </h1>
                </main>
                <main>
                     <h1> </h1>
                     <h1> </h1>
                </main>
                <Form>
                    <Form.Group controlId="" >
                        <Form.Label> От </Form.Label>
                        <Form.Control type="" placeholder="Введите дату " />
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label> До </Form.Label>
                        <Form.Control type="" placeholder="Введите дату  " />
                    </Form.Group>
                    
                    <button type="button" class="btn btn-warning"> Подтвердить </button>
                </Form>
                <h3>Теперь, чтобы увидеть график вашей массы, всего лишь перейдите во вкладку "ГРАФИК"...</h3>

        
       
        
    
        
       
    </>    
)}

export default Enter;



