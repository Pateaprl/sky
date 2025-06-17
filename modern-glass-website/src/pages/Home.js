import React from 'react';
import TwoColumn from '../layouts/TwoColumn';
import ContentArea from '../components/ContentArea';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <TwoColumn
            sidebar={<Sidebar />}
            content={<ContentArea />}
        />
    );
};

export default Home;