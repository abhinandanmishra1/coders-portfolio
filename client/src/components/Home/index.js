import React from 'react';

import Button from "common/components/Button";
import Navbar from 'common/components/Navbar';

const Home = () => {
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
                    Do you want to hire someone or visit this website?
                </div>
                <div className="home__next">
                    <Button type="type1" title="I want to hire" onlick={() => { }} customClass="home__btn" />
                    <Button type="type1" title="I want to visit" onlick={() => { }} customClass="home__btn" />
                </div>
            </div>
        </>
    )
}

export default Home;
