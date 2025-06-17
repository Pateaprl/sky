import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';
import './TwoColumn.css'; // Assuming you have styles for the layout

const TwoColumn = () => {
    return (
        <div className="two-column-layout">
            <Sidebar />
            <ContentArea />
        </div>
    );
};

export default TwoColumn;