import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import SocialMedia from './socialmedialogos'; 

function mainpage(){
    return( 
<div className="Welcome-Banner">      
    <h1>hello, i'm jasmine!</h1>
    <h6>I am into coding and designing. Let me show myself.</h6>

   
    <Link to="/aboutme">  <button className='button-explore'> explore.</button></Link>
    
    <div className="social-med-logos"><br/>
    <SocialMedia/>
    </div>
</div>




        );
    };

export default mainpage;
    