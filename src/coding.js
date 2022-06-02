import React, { useState } from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function Coding(){
    const [aboutmediv, setAbout] = useState(false);
    const changeAbout = () =>{
        //console.log(window.scrollY);
        if(window.scrollY == 800){
            setAbout(true);
        }else{
            setAbout(false);
        }
    };

    //for checking scroll working 
    window.addEventListener('scroll', changeAbout);

    return( 
     <div id="aboutme" className={aboutmediv ? 'about-me-div': 'about-me-div-active'}>
         <h1>Sample Works</h1>
            <div className="coding-column" >
                <div className="column">
                    <img src={require('./img/pic4.PNG')}alt="pic1"></img>
                    <h3><a href="https://jasminelo123.github.io/Jas-Sample/">REACTJS REGISTRATION FORM DESIGN</a></h3>
                    <h3>One of my sample outputs during my college days Used React Js and CSS for designing.</h3>
                </div>
                <div className="column">
                    <img src={require('./img/figmasample.PNG')}alt="pic1"></img>
                    <h3><a href="https://www.figma.com/proto/6hJEIsoIPzVIfavgCCJfS2/Jmlo-SIrirmiri?node-id=0%3A1">RECENT PERSONAL PROJECT</a></h3>
                    <h3>E-commerce landing page for Jmlo Sirimiri Mnl. This is my small online shop. Used Figma for prototyping, underdevelopment used React JS and CSS.</h3>
                </div>
            </div>
        </div>
        );
    };
    
export default Coding;
    