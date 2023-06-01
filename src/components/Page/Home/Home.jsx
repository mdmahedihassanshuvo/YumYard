import React, { useContext } from 'react';
import './Home.css'
import Lottie from "lottie-react";
import food from '../../../assets/animation/food.1.json'
import { useLoaderData, useNavigation } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import blog from '../../../assets/images/blog.jpg'
import blog2 from '../../../assets/images/blog.1.jpg'
import category from '../../../assets/images/category.1.jpg'
import category2 from '../../../assets/images/category.2.jpg'
import category3 from '../../../assets/images/category.3.jpg'
import category4 from '../../../assets/images/category.4.jpg'
import category5 from '../../../assets/images/category.5.jpg'
import category6 from '../../../assets/images/category.6.jpg'
import banner1 from '../../../assets/images/banner4.jpg'
import banner2 from '../../../assets/images/banner1.jpg'
import banner3 from '../../../assets/images/banner2.jpg'
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {

    const chefData = useLoaderData()
    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <LoadSpinner></LoadSpinner>
    }
    console.log(chefData)
    if (!chefData) {
        return <h1>hello</h1>
    }
    // return <h1>hello world</h1>

    return (
        <>
            {/* banner section----------------------> */}

            <div>
                <Carousel className='caru' >
                    <Carousel.Item className='caru-item'>
                        <img
                            className="img-fluid w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption '>
                            <h2 className='fw-bold fs-sm-5 fs-lg-1 text-light mb-3'>Welcome to <span className='text-warning'>Yum</span><span className='text-primary'>Yard</span></h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia alias, reprehenderit necessitatibus modi commodi, autem laborum iste ab architecto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caru-item'>
                        <img
                            className="img-fluid w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='carousel-caption' style={{}}>
                            <h2 className='fw-bold fs-sm-5 fs-lg-1 text-light mb-3'>Welcome to <span className='text-warning'>Yum</span><span className='text-primary'>Yard</span></h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia alias, reprehenderit necessitatibus modi commodi, autem laborum iste ab architecto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caru-item'>
                        <img
                            className="img-fluid w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='carousel-caption'>
                            <h2 className='fw-bold fs-sm-5 fs-lg-1 text-light mb-3'>Welcome to <span className='text-warning'>Yum</span><span className='text-primary'>Yard</span></h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia alias, reprehenderit necessitatibus modi commodi, autem laborum iste ab architecto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* // card section ---------------------------------------> */}

            <section className='container chef text-center' style={{ marginTop: '80px' }}>
                <h2 className='fw-bolder fw-lg-bold mb-3 mb-lg-5 '>Famous Chef in Italy</h2>
                <div className='card-container mb-5 mx-auto'>
                    {
                        chefData?.map(item => <ChefCard key={item.id} card={item}></ChefCard>)
                    }
                </div>
            </section>

            {/* ----------------------Blog section--------------------- */}

            <section className='container mb-5' >
                <h1 className='text-center mb-3 mb-lg-5 fw-bolder' >Some Famous in food of this Country</h1>
                <div className='d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-3 bg-light p-4 rounded-2'>
                    <div className='w-100 w-lg-50'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure est doloribus! Facere eveniet aperiam quidem laborum, doloribus odio veritatis obcaecati nam error? Similique cumque animi dolorum officia ipsa unde. Eaque, voluptatum earum officia illum perspiciatis quis doloremque voluptates velit aliquid expedita nam nisi ipsam, fugit ut excepturi, corrupti sunt!</p>
                    </div>
                    <div style={{ width: '400px' }} className='blog-img mx-auto rounded'>
                        <LazyLoadImage effect="blur" className='img-fluid rounded' src={blog} alt="" />
                    </div>
                </div>
            </section>

            <section className='container mb-5'>
                <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 bg-light p-4 rounded-2'>
                    <div style={{ width: '400px' }} className='blog-img mx-auto rounded'>
                        <LazyLoadImage effect="blur" className='img-fluid rounded' src={blog2} alt="" />
                    </div>
                    <div className='w-100 w-lg-50'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure est doloribus! Facere eveniet aperiam quidem laborum, doloribus odio veritatis obcaecati nam error? Similique cumque animi dolorum officia ipsa unde. Eaque, voluptatum earum officia illum perspiciatis quis doloremque voluptates velit aliquid expedita nam nisi ipsam, fugit ut excepturi, corrupti sunt!</p>
                    </div>
                </div>
            </section>

            {/* ------------------------------------Food Category-------------------------------- */}

            <section className='container mb-5' style={{ marginTop: '80px' }}>
                <h2 className='text-center fw-bolder mb-5'>Best Food Category</h2>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Lasagna</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category2} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Fiorentina Steak</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category3} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Risotto</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Truffles</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category5} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Focaccia</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <LazyLoadImage effect="blur" className='img-fluid' style={{ height: '250px' }} src={category6} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Pasta</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;