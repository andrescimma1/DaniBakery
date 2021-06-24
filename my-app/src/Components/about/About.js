import React from 'react';
import "./About.css";
import AboutImage from '../../img/7.jpeg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h2>¿Quienes somos?</h2>
                <p>Lorem ajksdjak iqjweiu aosaiudoqi uaosduao joaj suasodoudqwe iaso diwqe
                    aosdia oaius aso2duoasdiuasdo. Aasdk oas' po ap aosp opasodp pask pask
                    askdoas op pa. Pk laspdk kaoeq kp askpd kpasd kp aspqw!
                </p>
            </div>
            <div className="about-img">
                <img src={AboutImage} alt="About Image" />
            </div>
        </div>
    )
}

export default About
