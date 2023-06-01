import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import LoadSpinner from '../../Page/LoadSpinner/LoadSpinner';

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    // console.log(user)

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('logged out successfully')
            })
            .catch((error) => console.error(error))
    }

    return (
        <Navbar className='navbar-container' style={{ height: '70px' }} collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className=''>
                <Navbar.Brand href="#home" className='fs-3'><Link className='text-decoration-none' to='/'><h2><span className='text-warning'>Yum</span><span className='text-primary'>Yard</span></h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto mt-md-2'>
                        <ul className='d-flex gap-md-5 ul-list'>
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-warning"
                                            : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-warning"
                                            : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                {user ?
                                    <div className='d-flex flex-column flex-lg-row gap-2 gap-lg-5 justify-content-left align-items-lg-center'>
                                        <Image className='img' title={user?.displayName} style={{ width: '40px' }} src={user?.photoURL} roundedCircle />
                                        <NavLink
                                            to='/'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-warning"
                                                    : ""
                                            }
                                        >
                                            <button className='bg-primary text-white border-0 px-2 py-1 rounded' onClick={handleLogout}>Logout</button>
                                        </NavLink>
                                    </div>
                                    :
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-warning"
                                                : ""
                                        }
                                    >
                                        Login
                                    </NavLink>}
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;



// <Nav className="me-auto">
//     <Nav.Link href="#features">Features</Nav.Link>
//     <Nav.Link href="#pricing">Pricing</Nav.Link>
//     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">
//             Another action
//         </NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">
//             Separated link
//         </NavDropdown.Item>
//     </NavDropdown>
// </Nav>