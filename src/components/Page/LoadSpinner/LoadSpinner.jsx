import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadSpinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center loader'>
             <Spinner animation="border" variant="success" />
        </div>
    );
};

export default LoadSpinner;