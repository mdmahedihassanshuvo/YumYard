import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../assets/images/google.logo.png'
import github from '../../../assets/images/github.logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Login.css'
import Swal from 'sweetalert2';

const Login = () => {

    const { loginUser, loginByGoogle, loginByGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleLoginForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long'
            })
            return
        }

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
            })
            .catch(err => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    return (
        <div className='mt-5 login'>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleLoginForm} className='w-25 mx-auto border p-3 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br />
                <Form.Text className="">
                    <p className='mt-2'>Don't have any account please, <Link state={location.state} to='/register'>Register.</Link></p>
                </Form.Text>
                <div className='d-flex flex-column mt-2 gap-2 '>
                    <button onClick={googleLogin} className='border-0 rounded p-2 text-primary'><img className='' style={{ width: '26px' }} src={google} alt="" /> Login with Google</button>
                    <button onClick={githubLogin} className='border-0 rounded p-2 text-primary'><img style={{ width: '26px' }} src={github} alt="" /> Login with github</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;