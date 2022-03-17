import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function editing(){
    return( 
<div className="this-is-div"> 
<div className="parent">
<div className="wide "><h1 className="name-tags">editing.</h1></div>
<div className="narrow">
    <h1>what i do. <br/>poster/video editing<span className='white-name'>.</span></h1>
    <h6>handling a small online shop using Shopee.
        creating my own poster using Photoshop, Illustrator or Canva.
        making vlogs and video contents at Youtube, Facebook, Tiktok and Instagram.
        let me share some of it...
    </h6>
    <Link to="/shares">  <button className='button-explore-mini'> more.</button></Link>
 

  </div>
</div>
<div className="down-banner">


<div className="Welcome-Banner" id="social">    
 
    <h1>social media i handle<span className='white-name'>.</span></h1>
    <h6 className="descrip">handles posting and graphic poster for the shop.
          <br/>knows basic editing using Photoshop, Illustrator and Canva.
          <br/>
          <br/>
        </h6>
</div>  
    <div className="columns">
        <div className="column">
            <img src={require('./img/pic1.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/jmlosirimirimnl">photo from instagram</a></i>
        </div>
        <div className="column">
            <img src={require('./img/pic2.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/jmlosirimirimnl">photo from instagram</a></i>
        </div>
    </div>
    <div className="columns">
        <div className="column">
            <img src={require('./img/pic6.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/jmlosirimirimnl">photo from instagram</a></i>
        </div>
        <div className="column">
            <img src={require('./img/pic7.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/jmlosirimirimnl">photo from instagram</a></i>
        </div>
    </div>
    <div className="columns">
        <div className="column">
            <img src={require('./img/pic8.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/artsbyjmlo">photo from instagram</a></i>
        </div>
        <div className="column">
            <img src={require('./img/pc9.PNG')}alt="pic1"></img>
            <i><a href="https://www.instagram.co/artsbyjmlo">photo from instagram</a></i>
        </div>
    </div>

    <div className="Welcome-Banner">    
 
    <h1>video editing.</h1>
    <h6 className="descrip">vlogging

        </h6>
</div>  
    <div className="columns">
        <div className="column">
        <iframe width="853" height="480" src="https://www.youtube.com/embed/qUFDmWvZG30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <i><a href="https://www.youtube.com/watch?v=qUFDmWvZG30&t=28s"> from youtube</a></i>
        </div>
    </div>

</div>
<SocialMedia/>
</div>
        );
    };
    
export default editing;
    