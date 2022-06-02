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
                <img className="logo-main" src={require('./img/ologo2.png')} />
                {/* <h6>i'm jasmine! i'm into <span className='white-name'>coding </span> &
                <span className='white-name'> designing</span>  </h6> */}
                <h6>web designer & developer</h6>
                <Link to="/contact">  <button className='button-explore'>work with me</button></Link>
                {/* <div className="up-icon"><br></br><h6 className="fas fa-angle-up"></h6></div> */}
            </div>
         
        </div>

        
        <AboutMe/>
        <Toolsused/>
        <Coding/>
        <SocialMedia/>
        </div>
        
        );
    };

export default Jmloportfolio;
    