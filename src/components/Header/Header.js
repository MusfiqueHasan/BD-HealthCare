import React from 'react';
import img from '../../images/b.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GoMailRead, MdPhoneInTalk, FiLogIn, FiLogOut, FaFacebookF, FaYoutube, FaLinkedinIn, AiOutlineGooglePlus } from 'react-icons/all';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <section className="top-header flex justify-evenly items-center my-4">
                <div>
                    <NavLink to="/home" className=" text-2xl font-bold no-underline text-black" >BD-HealthCare</NavLink>
                </div>
                <div className=" w-3/6 flex justify-evenly items-center">
                    <div className="contact-info flex items-center border-r border-gray-500 pr-7 ">
                        <GoMailRead className=" text-green-400 text-4xl mr-3 " />
                        <div className="info">
                            <span className="font-bold">Mail Us</span>
                            <p>medi@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info flex items-center border-r border-gray-500 pr-7">
                        <MdPhoneInTalk className=" text-green-400 text-4xl mr-3 " />
                        <div className="info">
                            <span className="font-bold">Call Us</span>
                            <p>(+088)01647581789</p>
                        </div>
                    </div>
                    <div className="login-logout flex items-center">
                        {/* <div >
                            <NavLink to="/login" className="flex items-center no-underline text-white font-semibold mr-3 bg-blue-900  px-3 py-2 rounded-full">
                                <FiLogIn className="mr-1"/>
                                <span>Login</span>
                            </NavLink>

                        </div> */}
                        <div >
                            <NavLink to="/sign-out" className="flex items-center no-underline text-white font-semibold mr-3 bg-blue-900 px-3 py-2 rounded-full">
                                <FiLogOut className="mr-1" />
                                <span className="text-xs">Logout</span>
                            </NavLink>

                        </div>
                        <div>
                            <img src={img} alt=""  className="rounded-full w-14 h-14"  />
                        </div>
                    </div>
                </div>
            </section>
            <hr className=" w-4/5 mx-auto" />
            <section className="bottom-header flex justify-evenly items-center mb-4">
                <div className=" w-5/12 flex justify-between items-center ">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="" >
                                    <NavLink to="/home" className="font-semibold uppercase mr-6 no-underline group text-black  ">Home</NavLink>
                                    <NavLink to="/about" className="font-semibold uppercase mx-6 no-underline text-black">About</NavLink>
                                    <NavLink to="/about" className="font-semibold uppercase mx-6 no-underline text-black">Services</NavLink>
                                    <NavLink to="/about" className="font-semibold uppercase mx-6 no-underline text-black">Appointment</NavLink>
                                    <NavLink to="/about" className="font-semibold uppercase mx-6 no-underline text-black">Our Doctor</NavLink>                                    
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="flex ">
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaFacebookF className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaYoutube className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaLinkedinIn className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-10 cursor-pointer"><AiOutlineGooglePlus className="text-sm text-white " /></span>

                </div>
            </section>
        </>
    );
};

export default Header;