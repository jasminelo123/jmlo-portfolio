import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SocialMedia from './socialmedialogos';
import AboutMe from './aboutme';
import Toolsused from './toolsused';
import Coding from './coding';
import contact from './contact';

function Jmloportfolio(){
    return( 
        <div>
        
        <div className="Welcome-Banner">      
            <div className="logo-div">
                <p className='intro-title'>- INTRODUCTION</p>
                <p className='hello-banner'>Hello, I'm Jasmine</p>
                <p className='hello-desc'>Web <span className='white-name'>Designer </span>and <span className='white-name'>Developer</span></p>
                <p className='title-description'>It excites me whenever I got to make things into reality. <br/>Excited to work with new things!</p>
                <Link to="/aboutme">  <button className='button-explore'>Know me more <i className="fa fa-chevron-right"></i></button></Link>
            </div>
         
        </div>
        <SocialMedia/>
        </div>
        
        );
    };

export default Jmloportfolio;
    