import React, { useState } from 'react';
import SocialMedia from './socialmedialogos';


function Contact(){
    const [aboutmediv, setAbout] = useState(false);
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
        <div id="aboutme" className={aboutmediv ? 'about-me-div': 'about-me-div-active'}>
            <div className="contact-content" >
        
                        <div className="child1">
                            {/* <p className='intro-title'>- My Contact</p> */}
                            <p className='title-description'> <i className="fa fa-heart fa-1x"></i><br/>Thank you for visiting<br/> my mini portfolio!</p>
                        </div>
                        <div className="child2">
                            <p className='hello-banner'>- My Contact</p>
                            <p className='title-description'>I’m up with a talk or chat! Email me at any of my socials!</p>
                            <p className='title-description'><a href="lorenzanajasmine.m@gmail.com"><i className="fa fa-google fa-1x"></i> lorenzanajasmine.m@gmail.com</a></p>
                            <p className='title-description'><a href="linkedin.com/in/jasmine-lorenzana-0661951bb"><i className="fa fa-linkedin fa-1x"></i> linkedin.com/in/jasmine-lorenzana-0661951bb</a></p>
                            <p className='title-description'><i className="fa fa-map-marker fa-1x"></i> Meycauayan, Bulacan</p>
                            
                            <p className='hello-banner'>- Other Socials</p>
                            <p className='title-description'>Visit my Small online business and my YouTube Channel.</p>
                            <p className='title-description'><a href="shp.ee/a9a9qqt"><i className="fa fa-shopping-cart fa-1x"></i> Shop with me!</a></p>
                            <p className='title-description' ><a href="https://www.youtube.com/channel/UCX54EoqsFwVCF8cRuwmuclQ"><i className="fa fa-youtube fa-1x"></i> YouTube Vlogs</a></p>
                          </div>  

            </div>
           

        </div>
        <SocialMedia/>
        </div>

        );
    };
    
export default Contact;
    