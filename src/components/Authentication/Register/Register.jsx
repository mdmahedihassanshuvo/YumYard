import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../assets/images/google.logo.png'
import github from '../../../assets/images/github.logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Register.css'
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser, updateUserProfile, loginByGoogle, loginByGithub } = useContext(AuthContext);
    const [accept, setAccept] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, email, password, photo)

        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be at least 6 characters',
            })
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                updateUserProfile(photo, name)
                    .then(() => {
                        console.log('Updated user profile')
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signed in successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    const googleLogin = () => {
        loginByGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signed in successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    const githubLogin = () => {
        loginByGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signed in successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    const handleCheckBox = event => {
        console.log(event.target.checked)
        setAccept(event.target.checked)
    }

    return (
        <div className='mt-5 register'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <Form onSubmit={handleRegisterForm} className='w-25 mx-auto border p-3 rounded'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleCheckBox} type="checkbox" name='accept' label='Accept all Terms and Conditions' />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Submit
                </Button> <br />
                <Form.Text className="">
                    <p className='mt-2'>Already have an account please, <Link to='/login'>Login.</Link></p>
                </Form.Text>
                <div className='d-flex flex-column mt-2 gap-2 '>
                    <button onClick={googleLogin} className='border-0 rounded p-2 text-primary'><img className='' style={{ width: '26px' }} src={google} alt="" /> Login with Google</button>
                    <button onClick={githubLogin} className='border-0 rounded p-2 text-primary'><img style={{ width: '26px' }} src={github} alt="" /> Login with github</button>
                </div>
            </Form>
        </div>
    );
};

export default Register;