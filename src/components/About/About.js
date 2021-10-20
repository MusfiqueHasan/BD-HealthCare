import React from 'react';
import CommonPage from '../CommonPage/CommonPage';
import aboutImg from '../../images/about.jpg'
import './About.css'
import { Accordion } from 'react-bootstrap';
const About = () => {

    return (
        <CommonPage title={'About'}>
            <section className="about-bottom grid md:grid-cols-2 grid-cols-1  md:mx-44 md:my-20 my-10">
                <div className=" mx-10 ">
                    <img width="440" src={aboutImg} alt="" />

                </div>
                <div>
                    <div className=" flex flex-col md:items-start items-center md:px-0 px-10">
                        <p className=" font-bold text-green-300 text-xl mb-3">About Courses</p>
                        <p className=" font-extrabold md:text-4xl text-xl mb-3">We Provide Medical services that can help you to maintain health</p>
                        <p className="text-justify text-sm ">Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus. Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.</p>
                    </div>
                    <div className=" mt-3 md:px-0 px-10">
                        <div className="bottom-details">
                            <p className=" md:text-2xl text-green-400 font-bold"><i className="fas fa-angle-double-right"></i> Seamless Management</p>
                            <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p>
                        </div>
                        <div className="bottom-details">
                            <p className=" md:text-2xl text-green-400 font-bold"><i className="fas fa-angle-double-right"></i> Flawless Incorporation</p>
                            <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="md:px-0 px-10">
                <div className="flex flex-col justify-center items-center pt-24 ">
                    <p className="text-green-400 text-2xl font-bold uppercase">Help & FAQ</p>
                    <p className="font-bold md:text-4xl text-xl">General Question </p>
                    <p className="md:w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 md:px-44 mt-5">
                    <div>
                        <Accordion defaultActiveKey="0" className="">
                            <Accordion.Item eventKey="0" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>CanI personally meet a doctor at clinic?</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>How to make an appointment for Medical check up?</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>How I can find a nearby hospital?</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div>
                    <Accordion defaultActiveKey="0" className="">
                            <Accordion.Item eventKey="0" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>What payment methods are available?</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>CanI personally meet a doctor at clinic?</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className=" border-0 shadow-md mb-3 ">
                                <Accordion.Header>How can I get Medicine from online</Accordion.Header>
                                <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
        </CommonPage>
    );
};

export default About;