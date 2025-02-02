

import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from './Header';

const Proposal = () => {
    const navigate = useNavigate();

    AOS.init({ duration: 1000 });

    const handleYes = () => {
        navigate('/yes'); // Navigate to the "Yes" page
    };

    const handleNo = () => {
        navigate('/no'); // Navigate to the "No" page
    };

    return (
        <>
            <div>          <Header />
            </div>
            <div className="proposal" data-aos="fade-up">
                <h2>Hey Love,</h2>
                <p>I have a very important question for you...</p>
                <p>Will you be my Valentine?</p>
                <div className="buttons">
                    <button onClick={handleYes}>Yes!</button>
                    <button onClick={handleNo}>No</button>
                </div>
            </div>
        </>

    );
};

export default Proposal;