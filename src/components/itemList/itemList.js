import React, {Component} from 'react';
/* import './itemList.css'; */
import styled from 'styled-components';


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

    render() {
        return (
            
                <UlNormal>
                <li>
                    John Snow
                </li>
                <li>
                    Brandon Stark
                </li>
                <li>
                    Geremy
                </li>
            </UlNormal>
            
        );
    }
}