import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function toolsused(){
const langu =['HTML', 'CSS', 'React JS', 'PHP', 'Java', 'C++','Visual Studio Code', 'XAMPP', 'Blender', 'Unity'];
    return( 
        <div className="banner-line">
            <div className="coding-banner">    
                <h1>What I used.</h1>
                <br/>
                {langu.map(lang =><h2>{lang}</h2>)}
            </div>
        </div>
        );
    };
    
export default toolsused;
    