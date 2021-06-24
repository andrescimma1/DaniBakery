import React from 'react';
import boxPadre from '../media/BoxDiaDelPadre.mp4';
import '../App.css';
import About from '../Components/about/About';

const Home = () => {
    return (
        <>
        <div class="video-container">
            <video class="video" src={boxPadre} autoPlay loop muted />
            <h1>Dulce Bocado</h1>
        </div>
        <About/>
        </>
    )
}

export default Home
