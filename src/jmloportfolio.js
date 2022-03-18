import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SocialMedia from './socialmedialogos';
 

function Jmloportfolio(){
    const [aboutme, setAbout] = useState(false);
    const changeAbout = () =>{
        //console.log(window.scrollY);
        if(window.scrollY == 300){
            setAbout(true);
        }else{
            setAbout(false);
        }
    };

    //for checking scroll working 
    window.addEventListener('scroll', changeAbout);

    return( 
        <div>
        
        <div className="Welcome-Banner">      
            <div className="logo-div">
                <img className="logo-main" src={require('./img/logo.png')} />
                <h6>i'm jasmine! i'm into <span className='white-name'>coding </span> &
                <span className='white-name'> designing</span>  </h6>
                <Link to="/aboutme">  <button className='button-explore'>work with me</button></Link>
                {/* <div className="up-icon"><br></br><h6 className="fas fa-angle-up"></h6></div> */}
            </div>
         
        </div>

        <div className={aboutme ? 'about-me-div': 'about-me-div-active'}>
            <div className="about-me-content">
                <h1>hi, it's me! jasmine.</h1>
                <h6>4th year college student taking Bachelor of Science in Information techology at
                    Technological Institute of the Philippines.
                    Aspiring to become a programmer and a web developer.
                    I am seeking experience to help me grow with my career.
                   I am also handling a small online shop in Shopee.
                </h6>
            </div>

        </div>
    
        <SocialMedia/>
        </div>
        
        );
    };

export default Jmloportfolio;
    