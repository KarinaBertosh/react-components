import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function StartPage(): JSX.Element {
    const router = useNavigate();

    return (
        <div className="header">
            Hi!
        </div>
    );
}

export default StartPage;