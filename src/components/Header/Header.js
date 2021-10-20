import React from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GoMailRead, MdPhoneInTalk, FiLogIn, FiLogOut, FaFacebookF, FaYoutube, FaUserCircle, FaLinkedinIn, AiOutlineGooglePlus, FaRegUser } from 'react-icons/all';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const { user, logOut, userDisplayName } = useAuth()
    console.log(user.displayName)
    console.log(userDisplayName)
    console.log(user)

    return (
        <div className="shadow-xl ">

            {/* top header */}
            <section className=" flex md:justify-evenly md:items-center md:flex-row flex-col my-3">
                {/* site name */}
                <div className=" text-center">
                    <NavLink to="/home" className=" text-2xl font-bold no-underline text-black" >BD-HealthCare</NavLink>
                </div>
                {/* information */}
                <div className=" md:w-3/6 flex md:justify-evenly md:items-center md:flex-row flex-col ">
                    <div className="flex justify-evenly md:py-0 py-3">
                        <div className=" md:flex items-center justify-center border-r border-gray-500 pr-7 ">
                            <GoMailRead className=" text-green-400 md:text-4xl text-xl mr-3 " />
                            <div className="flex flex-col ">
                                <span className="font-bold">Mail Us</span>
                                <span>medi@gmail.com</span>
                            </div>
                        </div>
                        <div className="md:flex items-center justify-center md:border-r border-gray-500 pr-7 ml-3">
                            <MdPhoneInTalk className=" text-green-400 md:text-4xl text-xl mr-3 " />
                            <div className="info flex flex-col ">
                                <span className="font-bold">Call Us</span>
                                <span>(+088)01647581789</span>
                            </div>
                        </div>
                    </div>
                    {/* user login info */}
                    <div className="flex items-center justify-center mt-0 sm:mt-5 ">
                        {user.email ? <div >
                            <button onClick={logOut} className="flex items-center no-underline text-white font-semibold mr-4 bg-blue-900 px-3 py-2 rounded-lg">
                                <FiLogOut className="mr-1" />
                                <span className="text-xs">Logout</span>
                            </button>
                        </div> :
                            <div className="flex items-center">
                                <NavLink to="/login" className="flex items-center no-underline text-white font-semibold mr-3 bg-blue-900  px-3 py-2 rounded-lg">
                                    <FiLogIn className="mr-1" />
                                    <span className="text-xs">Login</span>
                                </NavLink>

                            </div>}

                        {
                            user.displayName && <div>
                                {['right'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip id={`tooltip-${placement}`}>
                                                profile
                                            </Tooltip>
                                        }
                                    >
                                        <NavLink to="/profile" className=" text-2xl text-black">
                                            <div className="flex flex-col items-center">
                                                {user.photoURL ?
                                                    <img src={user.photoURL} alt="" className="rounded-full w-14 h-14" />
                                                    : <FaUserCircle className="rounded-full w-14 h-14" />
                                                }
                                                <span className="font-semibold text-xs">{user.displayName}</span>
                                            </div>
                                        </NavLink>
                                    </OverlayTrigger>
                                ))}
                            </div>

                        }


                    </div>
                </div>
            </section>
            <hr className=" w-4/5 mx-auto" />

            {/* navbar menu */}
            <section className=" flex justify-evenly items-center md:flex-row flex-col-reverse py-4">
                <div className=" md:w-6/12 md:flex justify-between items-center w-full  ">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="bg-green-300 md:bg-white  ">
                                <Nav  >
                                    <NavLink to="/home" className="font-semibold uppercase md:mr-6 mr-0 no-underline group text-black   ">Home</NavLink>
                                    <NavLink to="/about" className="font-semibold uppercase md:mx-6  no-underline text-black ">About us</NavLink>
                                    <NavLink to="/services" className="font-semibold uppercase md:mx-6 no-underline text-black ">Services</NavLink>
                                    <NavLink to="/doctors" className="font-semibold uppercase md:mx-6 no-underline text-black ">Our Doctor</NavLink>
                                    <NavLink to="/appointment" className="font-semibold uppercase md:mx-6 no-underline text-black ">Appointment</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                {/* social link */}
                <div className="flex items-center ">
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaFacebookF className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaYoutube className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaLinkedinIn className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-10 cursor-pointer"><AiOutlineGooglePlus className="text-sm text-white " /></span>
                    {/* registration icon */}
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Register</Tooltip>}>
                        <span className="d-inline-block">
                            <NavLink to="/register" className=" text-2xl text-black"><FaRegUser /></NavLink>
                        </span>
                    </OverlayTrigger>


                </div>
            </section>
        </div>
    );
};

export default Header;