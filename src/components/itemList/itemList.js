import React, {Component} from 'react';
/* import './itemList.css'; */
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';


const comStyles = document.querySelector('.container');

/* console.log(window.getComputedStyle(comStyles)); */


const UlNormal = styled.ul`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    cursor: pointer;
    li {
        
            position: relative;
            display: block;
            padding: 0.75rem 1.25rem;
            background-color: #fff;
            border-top: 1px solid rgba(0, 0, 0, 0.125);
            
            }
            li:first-child {
                border: none !important;
                
            }    
        
        

    } 
    
    
`

export default class ItemList extends Component {
    gotService = new GotService();


    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
        .then((charList) => {
            this.setState({
                charList
            })
        })

    }


    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li key={i}
                onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }


    render() {
        const {charList} = this.state;

        




        if (!charList) {
            return <Spinner/>
        }


        const items = this.renderItems(charList);


        return (
            
                <UlNormal>
                {items}
            </UlNormal>
            
        );
    }
}