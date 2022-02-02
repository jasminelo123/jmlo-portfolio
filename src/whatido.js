import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function whatido(){
    return( 
<div>
<div className="parent">
<div className="wide "> </div>
<div className="narrow">
    <h1>let me share</h1>
    <h1 className="name">what i do.</h1>
    <h6>coding and designing was one of the things i love to deal.
          <br/>sometimes i do vlog and edit my own videos sharing my passion with arts (digital or traditional).
          <br/>i also design my own posters for my small online shop.
          <br/>allow me to give you a list of what I do.
        
      </h6>
      <Link to="/coding">  <button className='button-explore-mini'> explore.</button></Link>
  <SocialMedia/>
  </div>
</div>
 </div>
        );
    };
    
export default whatido;
    