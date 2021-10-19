
import React from 'react';
import { Card } from 'react-bootstrap';

const AllServices = (props) => {
    const { id,img, title, description } = props.service;
    return (
        <div className=" hvr-shrink flex justify-center ">
            <Card style={{ width: '370px', height: '500px' }} className="shadow-md">
                <div className="h-3/6">
                    <img src={img} alt="" className="h-full w-full" />
                </div>
                <Card.Body className="h-3/6 py-5 px-4 flex flex-col justify-center items-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-justify text-gray-500">
                        {description.slice(0, 122)}
                    </Card.Text>
                    <button
                        className="font-bold text-green-400 "
                        onClick={()=> props.handleServiceDetails(id)}
                        >
                        Read More <i className="fas fa-arrow-right"></i></button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AllServices;