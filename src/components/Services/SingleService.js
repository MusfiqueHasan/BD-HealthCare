import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import CommonPage from '../CommonPage/CommonPage';

const SingleService = () => {
    const { id } = useParams();
    // fetching data
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
    //  filtering data from local json data
    const SingleService = details.filter(service => service.id == id);

    return (

        // Single service details
        <CommonPage title={'Single Service'} prevTitle={'Services'}>
            <div className="flex flex-col justify-center items-center pt-32 mb-5">
                <p className="text-green-400 text-xl font-medium">Single Services</p>
                <p className="md:font-semibold font-bold md:text-4xl text-xl">Our Healthcare Service Details</p>
                <p className="md:w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </div>
            <div className=" md:px-40">
                <div className=" border-2  grid md:grid-cols-2 shadow-xl md:p-20 p-10 ">
                    <div className=" flex justify-center ">
                        <img src={SingleService[0]?.img} alt="" className="md:w-96 md:h-96 h-48" />
                    </div>
                    <div className=" flex flex-col items-start pt-5 ">
                        <p className=" bg-green-300 rounded-full px-3 py-2 text-white font-semibold mb-3"><span>{id}</span></p>
                        <p className=" font-extrabold text-5xl mb-4">{SingleService[0]?.title}</p>
                        <p className=" text-justify">{SingleService[0]?.description}</p>
                        <NavLink to="/services" className=" no-underline bg-green-300 text-white uppercase font-bold  rounded-full px-4 py-2 md:mt-5">See all services</NavLink>
                    </div>
                </div>
            </div>


        </CommonPage>
    );
};

export default SingleService;