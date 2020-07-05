import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components';


const CharDetailsDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
     ul {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        border: none;

        

        li {
            display: flex ;
            position: relative;
            
            padding: 0.75rem 1.25rem;
            background-color: #fff;
            border-top: ${props => props.noborder ? 'none' : '1px solid rgba(0, 0, 0, 0.125)' };
            border-right-width: 0;
            border-left-width: 0;
            border-radius: 0;
            justify-content: space-between;
            




        }
        
        

    } 
    li:first-child {
        border: none !important;
        
    }
    span:first-child {
        font-weight: bold;
    }
    
    




`





export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsDiv >
                <h4>John Snow</h4>
                <ul>
                    <li noborder='true'>
                        <span>Gender</span>
                        <span>male</span>
                    </li>
                    <li>
                        <span>Born</span>
                        <span>1783</span>
                    </li>
                    <li>
                        <span>Died</span>
                        <span>1820</span>
                    </li>
                    <li>
                        <span>Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </CharDetailsDiv>
        );
    }
}