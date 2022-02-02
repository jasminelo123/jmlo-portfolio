import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function aboutme(){
    return( 

<div className="parent ">
  <div className="wide "></div>
  <div className="narrow">
      <h1>hi, it's me!</h1>
      <h1 className="name">jasmine.</h1>
      <h6>4th year college student taking Bachelor of Science in Information techology at Technological Institute of the Philippines.
          <br/>Aspiring to become a programmer and a web developer.
          <br/>I am seeking experience to help me grow with my career.
          <br/>I am also handling a small online shop in Shopee.
      </h6>
      <Link to="/whatido">  <button className='button-explore-mini'> more.</button></Link>
        <SocialMedia/>
    </div>
</div>

        );
    };
    
export default aboutme;
    