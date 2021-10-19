import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import CommonPage from '../CommonPage/CommonPage';

const SingleService = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDetails(data)
            })
    }, [])
    console.log(details)

    const SingleService = details.filter(service => service.id == id);
    // console.log(SingleService)
    return (
        <CommonPage title={'Single Service'} prevTitle={'Services'}>
            <div className="flex flex-col justify-center items-center pt-32 mb-5">
                <p className="text-green-400 text-xl font-medium">Single Services</p>
                <p className="font-semibold text-4xl">Our Healthcare Service Details</p>
                <p className="w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </div>
            <div className=" px-40">
                <div className=" border-2  grid grid-cols-2 shadow-xl p-20 ">
                    <div className=" flex justify-center ">
                        <img src={SingleService[0]?.img} alt="" className="w-96 h-96" />
                    </div>
                    <div className=" flex flex-col items-start">
                        <p className=" bg-green-300 rounded-full px-3 py-2 text-white font-semibold "><span>{id}</span></p>
                        <h1 className=" font-extrabold">{SingleService[0]?.title}</h1>
                        <p className=" text-justify">{SingleService[0]?.description}</p>
                        <NavLink to="/services" className=" no-underline bg-green-300 text-white uppercase font-bold  rounded-full px-4 py-2 mt-5">See all services</NavLink>
                    </div>
                </div>
            </div>


        </CommonPage>
    );
};

export default SingleService;