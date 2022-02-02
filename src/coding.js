import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function coding(){
    return( 
<div>
<div className="parent ">
  <div className="wide"> <h1 className="name-tags">coding.</h1> </div>
  <div className="narrow">
      <h1>what i do.</h1>
      <h1 className="name">html.css.js.<br/>reactjs.php.java.</h1>
      <h6>i am interested with creating a website and brings it to life.
          <br/>i am open and have the eagerness to learn more with development.
          <br/>
          <br/>
      </h6>
      <Link to="/editing">  <button className='button-explore-mini'> more.</button></Link>
      <SocialMedia/>
      </div>
</div>
<a href="#coding" class='fas fa-angle-down'></a>
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
        );
    };
    
export default coding;
    