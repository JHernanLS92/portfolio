import React from 'react';
import images from '../assets/images';
import '../assets/css/App.css'


const Home = () => {
    const linkedin = () => {
        window.location.href = "https://www.linkedin.com/in/juanhernanlopezsuaste/";
    }
    const github = () => {
        window.location.href = "https://github.com/JHernanLS92";
    }

    return (
        <div className='Home container' id='home'>
            <section className='home'>
                <div className='info'>
                    <h1>Hello</h1>
                    <h1>I am</h1>
                    <h1>Hernán</h1>
                </div>
                <img src={images.program} className="imgHome" />
            </section>
            <div className="btn-group-horizontal socialSection">
                        <button type="button" className="linked" onClick={linkedin}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </button>
                        <button type="button" className="git" 
                        onClick={github}> 
                            <i className="fa-brands fa-github"></i>
                            </button>
                        <button type="button" className="CV">
                            <a  href="./CV-JuanHernanLopezSuaste.pdf" download  className='cv'>  CV  </a>
                            </button>
                    </div>
               
            <div className='menu'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
};

export default Home;