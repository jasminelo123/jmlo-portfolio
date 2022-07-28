import React from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function toolsused(){
const langu =['HTML', 'ReactJS','CSS', 'PHP', 'Java', 'C++'];
const tools =['VSCode', 'XAMPP', 'Blender', 'Unity'];
    return( 
        <div className="banner-line">
            <div className="coding-banner">    
                <p className='intro-title'>- LANGUAGE</p>
                {langu.map(lang =><h2>{lang}</h2>)}
                <p className='intro-title'>- TOOLS</p>
                {tools.map(tool =><h2>{tool}</h2>)}
            </div>
        </div>
        );
    };
    
export default toolsused;
    