import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => {
    return (

        // some additional info
        <div className=" flex justify-center md:flex-row flex-col mt-20 md:mx-0 mx-4 bg-gray-50 ">

            <div className=" md:w-3/12 h-80 md:p-14 p-8 shadow-xl">
                <i className="fas fa-user-md text-5xl text-green-400 mb-2"></i>
                <p className=" text-2xl font-semibold mb-3">Doctors Timetable</p>
                <p className="text-gray-400 mb-3">Doctors meet and talk with patients and caregivers to diagnose, manage and treat illnesses and injuries. </p>
                <NavLink to="/doctors" className="text-green-400 font-semibold no-underline">View Timetable <i className="fas fa-arrow-right"></i></NavLink>
            </div>
            <div className=" md:w-3/12 h-96 md:p-14 p-8 shadow-xl bg-indigo-900 text-white">
                <i className="fas fa-heartbeat text-5xl text-white mb-2"></i>
                <p className=" text-2xl font-semibold mb-3">Emergency Call</p>
                <p className="mb-5 text-gray-400">A doctor can work in any of several medical settings, such as private practices and hospitals as well as in teaching or medical research.</p>
                <button className="w-52 text-center uppercase text-white font-semibold bg-green-400 py-3 rounded-full">
                    <i className="fas fa-phone-alt"> (+088) 01647581789</i>
                </button>
            </div>
            <div className=" md:w-3/12 h-80 md:p-14 p-8 shadow-xl bg-green-400 text-white">
                <i className="fas fa-clipboard-list text-5xl mb-2"></i>
                <p className=" text-2xl font-semibold mb-3">Make An Appointment</p>
                <p className="text-gray-50 mb-3">When it's necessary and appropriate, they also provide referrals for patients to see specialists.</p>
                <NavLink to="/appointment" className="text-white font-semibold no-underline">View Timetable <i className="fas fa-arrow-right"></i></NavLink>
            </div>

        </div>
    );
};

export default Info;