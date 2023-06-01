import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { HeartIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Foods = ({ food }) => {
    // console.log(food)

    const { id, cooking_method, ingredients, rating, image_link, recipe_name } = food;

    const showToast = (event) => {
            toast('Add to Favorite successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        (event.target.setAttribute('disabled', true));
    }

    return (
        <div className='mb-5'>
            <Card style={{ width: '18rem', height: '42rem' }}>
                <LazyLoadImage effect="blur" className='img-fluid w-100' variant="top" style={{ height: '200px' }} src={image_link} />
                <Card.Body>
                    <Card.Title>Recipe Name: {recipe_name}</Card.Title>
                    <p className='mb-1'> <span className='fw-bolder'>Ingredients</span>: {
                        ingredients.map(list => {
                            return <li>{list}</li>
                        })
                    }</p>
                    <Card.Text className='mb-1'>
                        <span className='fw-bolder'>Cooking-Method</span>: {cooking_method.length > 150 ? (cooking_method.slice(0, 150)) : cooking_method}
                    </Card.Text>
                    <p className='mb-0'><span className='fw-bolder'>Rating</span>: <HeartIcon style={{ height: '20px', width: '20px' }} className="text-danger" /> {rating}</p>
                    <Button onClick={showToast} style={{ bottom: '15px', position: 'absolute' }} variant="primary">Add To Favorite</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Foods;