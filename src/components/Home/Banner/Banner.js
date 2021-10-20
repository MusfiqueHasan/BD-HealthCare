import React from 'react';
import { NavLink } from 'react-bootstrap';

const Banner = () => {
    return (
        <div >
            {/* home banner */}
            <div className="banner flex items-center  ">
                <div className=" md:w-2/5 md:h-4/6 md:ml-72 md:p-16 p-10 bg-indigo-100 rounded-lg shadow-md mx-6 ">
                    <h1 className=" font-bold md:text-5xl text-2xl mb-4">Best Medical & Healthcare Service For Your Family</h1>
                    <p className="mb-4 text-justify">A doctor is someone who is experienced and certified to practice medicine to help maintain and mental health.</p>
                    <NavLink to="/appointment" className=" md:w-52 w-36 md:text-sm text-xs text-center uppercase text-white font-semibold bg-blue-900 py-3 rounded-full">Appointment</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;