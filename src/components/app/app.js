import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
////37:57   100






export default class App extends Component  {
    gotService = new GotService();
    
    state =  {
        hide:false,
       
        error: false
    }

    componentDidCatch() {
        
        this.setState({
            error:true
        })
    }


    hideMe = ()=>{
        this.setState({
            hide: !this.state.hide
        })
    }
    constructor () {
        super();

        const library = new GotService();
        library.getAllHouses()
        .then(item => item.forEach(element => {
            console.log(element.name);
            
        }));
        
    
    
    
    
   
    
    
    }
    button = <button id='btn' onClick={this.hideMe}>HideMe</button>




   

    
    
    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }


        return (

            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.button}
                           {this.state.hide ? null : <RandomChar/>}
                        </Col>
                    </Row>
                    <CharacterPage></CharacterPage>
                    ///////
                   <Row>
                        
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item)=> item.name} />
                        </Col>
                        <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                        </Row>
                        <Row>
                        <Col md='6'>
                        <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item)=> item.name}  />
                        </Col>
                        <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                        </Col>

                    </Row>  
                   /////////////
                </Container>
            </>
        );
    
    }
    
};




