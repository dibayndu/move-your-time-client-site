import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import More from '../More/More';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <More></More>
            </div>
    );
};

export default Home;