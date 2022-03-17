import React from 'react';
import SocialMedia from './socialmedialogos';

function shares(){
    return( 
<div> 
<div className="Welcome-Banner">    
 
 <h1>some websites i did with my course.</h1>
 <h6 className="descrip"> html, css, js, react, js, php and java
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
<div className="Welcome-Banner">    
 
    <h1>social media i handle.</h1>
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
    
    <SocialMedia/>
    
</div>
        );
    };
    
export default shares;
    