import React from 'react';
import {Col, Row, Container, ButtonToggle} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';


const library = new GotService();
library.getAllHouses()
    .then(item => item.forEach(element => {
        console.log(element.name);
        
    }));
    


const hideMe = () => {
    const random = document.querySelector('.random-block')
    random.classList.toggle('hide');
    
}






const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    <button id='btn' onClick={hideMe
                    } >Show/Hide</button>
                        <RandomChar/>
                        
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;


/* document.querySelector('#btn').addEventListener('click', ()=>{
    RandomChar.classList.toggle('hide');

}) */