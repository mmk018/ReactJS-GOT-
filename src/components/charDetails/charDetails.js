import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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



const Field = ({char, field, label})=>{
 return(
    <li noborder='true'>
        <span>{label}</span>
        <span>{char[field]}</span>
    </li>
 )
}

export {Field}

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar(){
        const {charId} = this.props;
        if(!charId){
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char)=>{
                this.setState({char})
            }).catch((error)=>{
                this.setState({
                    error
                })
            })
            
    }

    render() {

        if(this.state.error) {
            return <>
            <CharDetailsDiv >
               
            
            <ErrorMessage/>
            </CharDetailsDiv>
            </>
        } else if (!this.state.char) {
            /* return <span className='select-error'>Please select a character</span> */
            return <Spinner></Spinner>

        }

        const {char} = this.state;
        const {name} = char;




        return (
            <CharDetailsDiv >
                <h4>{name}</h4>
                <ul>
                    {
                        React.Children.map(this.props.children, (child)=>{
                           return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </CharDetailsDiv>
        );
    }
}