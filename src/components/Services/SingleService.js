import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommonPage from '../CommonPage/CommonPage';
// import useServices from '../../hooks/useServices';

const SingleService = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
    }, [])
    console.log(details)

    const SingleService = details.filter(service => service.id == id);
    console.log(SingleService)
    // const { img, title } = singleService;
    return (
        <CommonPage title={'Service Details'} prevTitle={'Services'}>
            <div>
                <p>{id}</p>
                <img src={SingleService[0]?.img} alt="" />
                <h1>{SingleService[0]?.title}</h1>
            </div>
        </CommonPage>
    );
};

export default SingleService;