import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import Info from './Info/Info';
import ServicesInHome from './ServicesInHome/ServicesInHome';
import DoctorInHome from './DoctorInHome/DoctorInHome'




const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <ServicesInHome/>
            <DoctorInHome/>
        </div>
    );
};

export default Home;
