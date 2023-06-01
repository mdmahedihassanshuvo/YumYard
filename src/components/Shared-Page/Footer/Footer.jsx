import React from 'react';
import { FaFacebook, FaInstagram, FaSass, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='bg-dark text-white footer'>
            <div className="container ">
                <div className="d-flex flex-column gap-3 flex-lg-row justify-content-between p-4">
                    <div>
                        <p className='fs-4 mb-0'>About Us</p>
                        <p className='fs-4 mb-0'>FAQ</p>
                    </div>
                    <div>
                        <p className='fs-4 mb-0'>Contact Us</p>
                        <p className="text-light mb-1">
                            555 4th 5t NW, Washington <br />
                            DC 20530, United States
                        </p>
                        <p className="text-light mb-1">
                            +88 01750 000 000
                        </p>
                        <p className="text-light mb-1">
                            info@gmail.com
                        </p>
                    </div>
                    <div >
                        <p className='fs-4 mb-0'>Follow Us</p>
                        <div className='d-flex gap-2'>
                            <p className='fs-2'><FaFacebook></FaFacebook></p>
                            <p className='fs-2'><FaTwitter></FaTwitter></p>
                            <p className='fs-2'><FaInstagram></FaInstagram></p>
                        </div>
                    </div>
                    <div className="">
                        <h3><FaSass className='fs-1'></FaSass></h3>
                        <h1 className='fs-5'>MH_Company</h1>
                        <div>
                        <input type="email" name="email" placeholder='Enter email address' id="" />
                        <button className='bg-danger text-light'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='text-center' style={{ marginBottom: '0px' }}>
                    <p className='py-1' style={{ margin: '0' }}>Copyright @MH_Shuvo All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;