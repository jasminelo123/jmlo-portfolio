import React, { useState } from 'react';
import SocialMedia from './socialmedialogos';
import Toolsused from './toolsused';
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
    <div>
     <div id="aboutme" className={aboutmediv ? 'about-me-div': 'about-me-div-active'}>   
        <div className="coding-content" >
            <div className="child1">
                 <Toolsused/>
            </div>       
            <div className="child2">
                <div className="coding-column" >
                    <p className='intro-title'>- MY WORKS</p>
                    <div className="column">
                        <a href="https://jasminelo123.github.io/Jas-Sample/"><img src={require('./img/pic4.PNG')}alt="pic1"></img></a>
                        <p className='title-description'>REACTJS REGISTRATION FORM DESIGN<br/>
                        One of my sample outputs during my college days Used React Js and CSS for designing.</p>
                    </div>
                    <div className="column">
                        <a href="https://www.figma.com/proto/6hJEIsoIPzVIfavgCCJfS2/Jmlo-SIrirmiri?node-id=0%3A1"><img src={require('./img/figmasample.PNG')}alt="pic1"></img></a>
                        <p className='title-description'>RECENT PERSONAL PROJECT<br/>
                        E-commerce landing page for Jmlo Sirimiri Mnl. This is my small online shop. Used Figma for prototyping, underdevelopment used React JS and CSS.</p>
                    </div>
                </div>
            </div>   
        </div>  
        </div>
        <SocialMedia/>
        </div>
        );
    };
    
export default Coding;
    