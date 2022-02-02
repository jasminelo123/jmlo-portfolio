import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
  
function header(){
    return(
        <nav className="nav-bar">
            <ul>
                <li className="logo-name">
                    <a><Link to="/mainpage"> jmlo<span className='white-name'>.</span>__</Link></a>
                </li>
                <li className="nav navbar-nav navbar-right">
                    <a><Link to="/contact">contact me<span className='white-name'>.</span></Link></a>
                </li>
                <div class="dropdown">
                <li className="nav navbar-nav navbar-right">
                    <a  className="dropbtn"><Link to="/whatido">what i do<span className='white-name'>.</span></Link></a>
                    <div className="dropdown-content">
                    <a href="#"><Link to="/coding">coding.</Link></a>
                    <a href="#"><Link to="/editing">editing.</Link></a>
                    <a href="#"><Link to="/shares">sample things i did.</Link></a>
                    </div>
                </li>
                </div>
                <li className="nav navbar-nav navbar-right">
                    <a><Link to="/aboutme">about me<span className='white-name'>.</span></Link></a>
                </li>
                
            </ul>
        </nav>
        );
    };
    
export default header;
    