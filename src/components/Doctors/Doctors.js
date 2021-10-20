import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import CommonPage from '../CommonPage/CommonPage';
import DoctorsDetails from './DoctorsDetails'

const Doctors = () => {
    const [doctors] = useDoctors(false)
    return (
        <CommonPage title={'Our Doctors'}>
            <div className="bg-gray-50">
                <div className="flex flex-col justify-center items-center pt-32 pb-5">
                    <p className="text-green-400 text-xl font-medium">Our Doctors</p>
                    <p className="md:font-semibold font-bold md:text-4xl text-xl">Meet With Our Doctor</p>
                    <p className="md:w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
                </div>
                <div className="grid md:grid-cols-3 md:px-40 px-9 gap-y-10 gap-x-8  ">

                    {
                        doctors.map(doctor => <DoctorsDetails key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>

        </CommonPage>
    );
};

export default Doctors;