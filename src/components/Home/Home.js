import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from '../Services/Services';
import ServicesInHome from './ServicesInHome/ServicesInHome';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <ServicesInHome/>
        </div>
    );
};

export default Home;
