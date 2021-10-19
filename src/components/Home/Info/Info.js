import React from 'react';

const Info = () => {
    return (
        <div className=" flex justify-center mt-20 bg-gray-50 ">

            <div className=" w-3/12 h-80 p-14 shadow-xl">
                <i className="fas fa-user-md text-5xl text-green-400 mb-2"></i>
                <h4 className=" text-2xl">Doctors Timetable</h4>
                <p className="text-gray-400">Doctors meet and talk with patients and caregivers to diagnose, manage and treat illnesses and injuries. </p>
                <button className="text-green-400">View Timetable <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className=" w-3/12 h-96 p-14 shadow-xl bg-indigo-900 text-white">
                <i className="fas fa-heartbeat text-5xl text-white mb-2"></i>
                <h4 className=" text-2xl">Emergency Call</h4>
                <p className="mb-5 text-gray-400">A doctor can work in any of several medical settings, such as private practices and hospitals as well as in teaching or medical research.</p>
                <button className="w-52 text-center uppercase text-white font-semibold bg-green-400 py-3 rounded-full">
                    <i className="fas fa-phone-alt"> (+088) 01647581789</i>
                </button>
            </div>
            <div className=" w-3/12 h-80 p-14 shadow-xl bg-green-400 text-white">
                <i className="fas fa-clipboard-list text-5xl mb-2"></i>
                <h4 className=" text-2xl">Make An Appointment</h4>
                <p className="text-gray-50">When it's necessary and appropriate, they also provide referrals for patients to see specialists.</p>
                <button className="text-white font-semibold">View Timetable <i className="fas fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default Info;