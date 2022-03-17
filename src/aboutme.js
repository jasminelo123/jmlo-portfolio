import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import Header from './header';

function aboutme(){
    return( 
<div className="this-is-div">       
{/* <div className="App-nav-header"><Header/></div> */}
<div className="parent ">
  <div className="wide "></div>
  <div className="narrow">
      <h1>hi, it's me! jasmine.</h1>
      <h6>4th year college student taking Bachelor of Science in Information techology at Technological Institute of the Philippines.
          Aspiring to become a programmer and a web developer.
          I am seeking experience to help me grow with my career.
          I am also handling a small online shop in Shopee.
      </h6>
      <Link to="/whatido">  <button className='button-explore-mini'> more.</button></Link>
    </div>
    
</div>
<SocialMedia/>
</div> 

        );
    };
    
export default aboutme;
    