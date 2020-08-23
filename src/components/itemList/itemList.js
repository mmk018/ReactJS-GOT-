import React, {Component} from 'react';
/* import './itemList.css'; */
import styled from 'styled-components';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


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
    


    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
        .then((itemList) => {
            console.log(itemList);
            
            this.setState({
                itemList
            })

        }).catch((error)=>{
            this.setState({
                error
            })
        })

    }


    renderItems(arr) {
        return arr.map((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item);


            return (
                <li key={i}
                onClick={() => {
                    console.log(item.url.replace('https://www.anapioficeandfire.com/api/characters/', ''));
                    
                     

                    this.props.onItemSelected(item.url.replace('https://www.anapioficeandfire.com/api/characters/', ''))
                }}>
                    {label}
                    
                    
                    
                </li>
            )
        })
    }


    render() {
        const {itemList, error} = this.state;

        




        if (error) {
            return <>
            <UlNormal>
               

            <ErrorMessage/>
            </UlNormal>
            
            </>
        } else if (!itemList) {
            return <Spinner/>
        } 


        const items = this.renderItems(itemList);


        return (
            
                <UlNormal>
                {items}
            </UlNormal>
            
        );
    }
}