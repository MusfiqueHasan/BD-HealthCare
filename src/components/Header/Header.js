import React from 'react';
import { GoMailRead, MdPhoneInTalk, FiLogIn, FiLogOut, FaFacebookF, FaYoutube, FaLinkedinIn, AiOutlineGooglePlus } from 'react-icons/all';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="top-header flex justify-evenly items-center my-5">
                <div>
                    <NavLink to="/home" className=" text-2xl font-bold">BD-HealthCare</NavLink>
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
                    <div className="login-logout flex">
                        <div >
                            <NavLink to="/login" className="flex items-center">
                                <FiLogIn />
                                <span>Login</span>
                            </NavLink>

                        </div>
                        <div >
                            <NavLink to="/sign-out" className="flex items-center">
                                <FiLogOut />
                                <span>Logout</span>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
            <hr className=" w-4/5 mx-auto" />
            <div className="bottom-header flex justify-evenly items-center py-5">
                <div className=" w-5/12 flex justify-between items-center ">
                    <NavLink to="/home" className="font-semibold uppercase">Home</NavLink>
                    <NavLink to="/about" className="font-semibold  uppercase">About</NavLink>
                    <NavLink to="/services" className="font-semibold  uppercase">Services</NavLink>
                    <NavLink to="/appointment" className="font-semibold  uppercase">Appointment</NavLink>
                    <NavLink to="/doctor" className="font-semibold  uppercase">Our Doctor</NavLink>
                </div>
                <div className="flex ">
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaFacebookF className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaYoutube className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaLinkedinIn className="text-sm text-white " /></span>
                    <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-10 cursor-pointer"><AiOutlineGooglePlus className="text-sm text-white " /></span>

                </div>
            </div>
        </>
    );
};

export default Header;