import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../../hooks/useServices';
import AllServices from '../../Services/AllServices';

const ServicesInHome = () => {
    const history = useHistory()
    const [services] = useServices()
    const handleServiceDetails = (id) => {
            history.push(`/single-service/${id}`)
    }
    return (
        <div>
             <div className="bg-gray-50 ">
                <div className="flex flex-col justify-center items-center pt-40 pb-5">
                    <h5 className="text-green-400">Medical Services</h5>
                    <h2 className="font-semibold">Our Healthcare Service</h2>
                    <p className="w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
                </div>
                <div className="grid grid-cols-3 px-40 gap-y-10 ">

                    {
                        services.map(service => <AllServices
                            key={service.id}
                            service={service}
                            handleServiceDetails={handleServiceDetails}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesInHome;