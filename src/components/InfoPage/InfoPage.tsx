import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function InfoPage(): JSX.Element {
    const router = useNavigate();

    return (
        <div className="header">
            About Us
        </div>
    );
}

export default InfoPage;