import React from 'react';
import './errorMessage.css';
import img from  './daineris.jpg';


const ErrorMessage = () => {
    return (

        <>
            <span>Something goes wrong</span>
            <img src={img} alt='error'></img>
            



        </>

    )
}

export default ErrorMessage;