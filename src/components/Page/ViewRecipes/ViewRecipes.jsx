import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Foods from '../Foods/Foods';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ViewRecipes = () => {

    const [food, setFood] = useState([])
    const chefData = useLoaderData()
    const { id, chefName, imgLink, yearsOfExperience, numRecipes, like } = chefData
    const navigation = useNavigation()
    // console.log(food)
    
    useEffect(() => {
        fetch('https://food-server-hassanmdmahedi729-gmailcom.vercel.app/foodData')
        .then(response => response.json())
        .then(data => setFood(data))
    }, [])
    
    if(navigation.state === 'loading'){
        return <LoadSpinner></LoadSpinner>
    }
    
    return (
        <>

            {/* -------------------------chef section-------------------------------- */}

            <section className='container'>
                <div className='mx-sm-3 mx-lg-0 mt-5 d-flex flex-column flex-lg-row gap-3'>
                    <div className=''>
                        <Card style={{ width: '12rem' }}>
                            <LazyLoadImage effect="blur" variant="top" className='img-fluid' style={{ width: '18rem', height: '200px' }} src={imgLink} />
                            <Card.Body>
                                <Card.Title className='text-start'>{chefName}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <p className='mb-1'>Bio <ArrowRightIcon className='' style={{ width: '16px' }} /></p>
                        <p className='mb-1'>Name: <span className='fw-bolder'>{chefName}</span></p>
                        <p className='mb-1' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at laudantium? Nemo officiis sunt repellat earum inventore provident vel beatae dolorum temporibus deleniti consequuntur velit, voluptate doloremque enim dolores porro cumque rerum esse impedit? Facilis aut, explicabo ipsam dolorum debitis animi ipsa autem eius et nemo alias optio, dolor architecto.</p>
                        <p className='mb-1'>Experience: {yearsOfExperience} years</p>
                        <p className='mb-1'>Recipes: {numRecipes} plus</p>
                        <p className='mb-1'>Likes: <HeartIcon style={{ height: '20px', width: '20px' }} className="text-danger" /> {like}</p>
                    </div>
                </div>
            </section>


            <section className='mt-5'>
                <h3 className='text-center fw-sm-normal fw-lg-bolder mb-5'>Here Some Popular Food Recipes</h3>
                <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 container'>
                    {
                        food.map(item => <Foods key={item.id} food={item}></Foods>)
                    }
                </div>
            </section>
            <div className='text-center mb-3'>
                <Link to='/'><button className='text-white bg-primary border-0 p-2 rounded'><ArrowLeftIcon className='' style={{ width: '16px' }} /> Go Back </button></Link>
            </div>
        </>
    );
};

export default ViewRecipes;