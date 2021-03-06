import React, {useState, useEffect} from 'react';
import './randomChar.css';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default function RandomChar ({gotService}) {




   const [char, updateCharState]= useState({});

   const [loading, updateLoadingState]= useState(true);

   const [error, updateErrorState]= useState(false);


   


    let timerId;

    

    useEffect(() => {
        updateChar();
        timerId = setInterval(updateChar, 15000);
    }, []);

    useEffect(() => {
        return () => {
          console.log('will unmount');
          clearInterval(timerId);
        }
      }, []);

    
    const onCharLoaded = (char) => {
        updateCharState(char);
        updateLoadingState(false);

    }

    
    const onError = (err) => {
        updateErrorState(true);
        updateLoadingState(false);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25); //25-140
        gotService.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }

    
       

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    
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
}