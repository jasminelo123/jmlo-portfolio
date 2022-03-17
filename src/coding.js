import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function coding(){
    return( 
<div className="this-is-div"> 
<div className="parent ">
  <div className="wide"> <h1 className="name-tags">coding.</h1> </div>
  <div className="narrow">
      <h1>what i do<span className='white-name'>.</span><br/>html.css.js.reactjs.php.java.</h1>
      <h6>i am interested with creating a website and brings it to life.
          i am open and have the eagerness to learn more with development.
      </h6>
      <Link to="/editing">  <button className='button-explore-mini'> more.</button></Link>

      </div>
      
      
</div>
<div className="up-icon"><h6 className="fas fa-angle-up"></h6></div>
<div className="down-banner">

<div className="Welcome-Banner" id="coding">    
 
 <h1>some websites i did with my course.</h1>
 <h6 className="descrip"> html, css, js, reactjs, php and java
          <br/>
        </h6>
</div>  
 <div className="columns">
     <div className="column">
     <img src={require('./img/pic4.PNG')}alt="pic1"></img>
     <i><a href="https://jasminelo123.github.io/Jas-Sample/">reactjs registration form design</a></i>
     </div>
     <div className="column">
     <img src={require('./img/pic5.PNG')}alt="pic1"></img>
     <i><a href="#">webdesign only using html and css</a></i>
     </div>
 </div>
 </div>
 <SocialMedia/>
 </div>
        );
    };
    
export default coding;
    