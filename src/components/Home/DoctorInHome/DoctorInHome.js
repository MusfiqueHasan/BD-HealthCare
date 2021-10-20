import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import DoctorsDetails from '../../Doctors/DoctorsDetails';

const DoctorInHome = () => {
    const [doctors] = useDoctors(true)
    return (
        // doctor section in home
        <div className="bg-gray-50">
            <div className="flex flex-col justify-center items-center pt-32 pb-5">
                <p className="text-green-400 text-xl font-medium">Our Doctors</p>
                <p className="md:font-semibold font-bold text-xl md:text-4xl">Meet With Our Doctor</p>
                <p className="md:w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </div>
            <div className="md:grid md:grid-cols-3 md:px-40 px-9 md:gap-y-10 md:gap-x-8  ">

                {
                    doctors.map(doctor => <DoctorsDetails key={doctor.id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default DoctorInHome;