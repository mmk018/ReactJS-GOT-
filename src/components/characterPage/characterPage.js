import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import CharDetails,{Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';




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
        const charDetails = (
            <CharDetails charId={this.state.selectedChar} >
                <Field field='gender' label='Gender'></Field>
                <Field field='born' label='Born'></Field>
                <Field field='died' label='Died'></Field>
                <Field field='culture' label='Culture'></Field>
            </CharDetails>


        )


        return (
            <RowBlock left={itemList} right={charDetails}></RowBlock>
        )
    }
}

