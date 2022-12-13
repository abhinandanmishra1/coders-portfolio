import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from "common/components/Button";
import Navbar from 'common/components/Navbar';

const Home = () => {
    const navigate = useNavigate();

    const signUp = () => {
        navigate("/auth/signup");
    }

    const defaultProfile = () => {
        navigate("/abhinandanmishra1/profile/codeforces");
    }

    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home__intro-title">
                    <h1>
                        Skills speak louder than words
                    </h1>
                </div>
                <div className="home__intro-subtitle">
                    Do you want to see <span>Abhinandan's</span> Portfolio or create your portfolio?
                </div>
                <div className="home__next">
                    <Button type="type1" title="Abhinandan's Portfolio" onClick={defaultProfile} customClass="home__btn" />
                    <Button type="type1" title="Create Portfolio" onClick={signUp} customClass="home__btn" />
                </div>
            </div>
        </>
    )
}

export default Home;
