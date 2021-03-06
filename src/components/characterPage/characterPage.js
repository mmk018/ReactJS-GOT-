import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import itemDetails,{Field} from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';
import ItemDetails from '../itemDetails/itemDetails';




export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        

    }

    onItemSelected = (id)=>{
        this.setState({
            selectedChar: id
        })
        
    }
    

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllCharacters}
                             renderItem={({name, gender})=> `${name} (${gender})`}/>
        );
        const itemDetails = (
            <itemDetails charId={this.state.selectedChar} >
                <Field field='gender' label='Gender'></Field>
                <Field field='born' label='Born'></Field>
                <Field field='died' label='Died'></Field>
                <Field field='culture' label='Culture'></Field>
            </itemDetails>


        )


        return (
            <RowBlock left={itemList} right={itemDetails}></RowBlock>
        )
    }
}

