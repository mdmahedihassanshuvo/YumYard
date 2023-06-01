import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HeartIcon } from '@heroicons/react/24/solid'
import { Link, useNavigation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ card }) => {
    // console.log(card)
    const { id, chefName, imgLink, yearsOfExperience, numRecipes, like } = card
    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <LoadSpinner></LoadSpinner>
    }

    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
            <LazyLoadImage effect="blur" variant="top" className='img-fluid' style={{ width: '18rem', height: '340px' }} src={imgLink} />

                <Card.Body>
                    <Card.Title className='text-start'>{chefName}</Card.Title>
                    <Card.Text className='text-start mb-0'>
                        Experience: {yearsOfExperience} years
                    </Card.Text>
                    <Card.Text className='text-start mb-0'>
                        Recipes: {numRecipes} plus
                    </Card.Text>
                    <Card.Text className='text-start mb-2'>
                        Likes: <HeartIcon style={{ height: '20px', width: '20px' }} className="text-danger" /> {like}
                    </Card.Text>
                    <Link to={`/chefData/${id}`}><Button className='w-100' variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;