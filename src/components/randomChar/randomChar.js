import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import { ThemeConsumer } from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage/'

export default class RandomChar extends Component {

    



    gotService = new gotService;
    state = {
      char: {},
      loading: true,
      hide: true 
    }

    componentDidMount() {
        console.log('mounting');
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
        
    }

    componentWillUnmount() {
        console.log('unmounting');
        
        clearInterval(this.timerId);
    }

    onCharLoaded = (char)=> {
        this.setState({
            char,
            loading: false,
            error: false


    });
    }


    onError = (err) => {
        this.setState({
            error: true,
            loading: false,

        })
    }


    updateChar =()=> {
       
        
        const id = Math.floor(Math.random() *140 +25);//Range from 25 till 140
        /* const id = 13000000000; *///to check for errors
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    /* hideMe = () => {
        this.setState({
            hide: !this.state.hide
        })
    } */


    render() {


        const {char , loading, error, hide} = this.state;

        

        const errorMessage = (error && !hide)  ? <ErrorMessage/> : null;

        const spinner = (loading && !hide) ?  <Spinner/> : null;
        
        const content = !(loading || error || hide) ? <View char={char}></View> : null  ;
        



        return (
            <>
            <div className="random-block rounded">
                
                {errorMessage}
                {spinner}
                {content}
            </div>
            </>
        );
    }
}


const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>

        </>
    )
};

