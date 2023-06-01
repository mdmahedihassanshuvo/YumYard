import React from 'react';
import { Link, Navigate, useRouteError } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const error = useRouteError()
    console.log(error)
    const { statusText, status, data } = error
    return (
        <div className='error-container'>
            <div className='d-flex  flex-column justify-content-center align-items-center text-container' style={{ minHeight: '100vh' }}>
                <h1 className='head'>{status}</h1>
                <p>{statusText}</p>
                <p className='text-decoration-underline '>{data}</p>
                <Link to='/'><button className='text-white bg-primary rounded border-0 p-1'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;