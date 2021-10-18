import React from 'react';
import { NavLink } from 'react-bootstrap';

const Banner = () => {
    return (
        < >
            <div className="banner flex items-center ">
                <div className=" w-2/5 h-4/6 ml-72 p-16 bg-indigo-100 rounded-lg shadow-md ">
                    <h1 className=" font-bold text-5xl mb-4">Best Medical & Healthcare Service For Your Family</h1>
                    <p className="mb-4">A doctor is someone who is experienced and certified to practice medicine to help maintain and mental health.</p>
                    <NavLink to="/appointment" className=" w-52 text-center uppercase text-white font-semibold bg-blue-900 py-3 rounded-full">Appointment</NavLink>
                </div>
            </div>
        </>
    );
};

export default Banner;