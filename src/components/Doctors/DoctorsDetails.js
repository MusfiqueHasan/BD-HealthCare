import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/all';

const DoctorsDetails = ({ doctor }) => {
    const { name, designation, img } = doctor
    return (
        <>
            <Card className=" text-white mb-40">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className=" bg-blue-900 w-80 h-2/5 mt-96 mx-auto flex flex-col justify-center items-center ">
                    <Card.Text className="text-green-400 font-bold">{designation}</Card.Text>
                    <Card.Title>{name}</Card.Title>
                    <div className="flex mt-2">
                        <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaFacebookF className="text-sm text-white " /></span>
                        <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaYoutube className="text-sm text-white " /></span>
                        <span className=" bg-green-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaLinkedinIn className="text-sm text-white " /></span>
                        <span className=" bg-green-400 rounded-full w-8 h-8 p-2 cursor-pointer"><FaInstagram className="text-sm text-white " /></span>

                    </div>
                </Card.ImgOverlay>
            </Card>

        </>
    );
};

export default DoctorsDetails;