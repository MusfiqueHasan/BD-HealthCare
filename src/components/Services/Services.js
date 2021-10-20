import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';
import CommonPage from '../CommonPage/CommonPage';
import AllServices from './AllServices';
import './Service.css'
const Services = () => {    
    const history = useHistory()
    const [services] = useServices()
    const handleServiceDetails = (id) => {
            history.push(`/single-service/${id}`)
    }
    return (
        <CommonPage title={'Services'}>
            <div className="bg-gray-50 ">
                <div className="flex flex-col justify-center items-center pt-32 pb-5">
                    <p className="text-green-400 text-xl font-medium">Medical Services</p>
                    <p className="md:font-semibold font-bold md:text-4xl text-xl">Our Healthcare Service</p>
                    <p className="md:w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
                </div>
                <div className="grid md:grid-cols-3 md:px-40 px-6 gap-y-10 ">

                    {
                        services.map(service => <AllServices
                            key={service.id}
                            service={service}
                            handleServiceDetails={handleServiceDetails}
                        />)
                    }
                </div>
            </div>
        </CommonPage>
    );
};

export default Services;