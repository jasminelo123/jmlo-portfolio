import React, {useState} from 'react';
import {Link} from 'react-router-dom';
  
function Header(){
    //for open and close nav burger icon
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //for scrolling navbar changing color background
    const [navbar,setNavbar] = useState(false);
    const changeBackground = () =>{
        //console.log(window.scrollY);
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    //for checking scroll working 
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="logo-name">
                    <a><Link to="/jmloportfolio">jmlo<span className='white-name'>;</span></Link></a>
                </li>
                <li >
                    <a><Link to="/contact">contact me<span className='white-name'>.</span></Link></a>
                </li>
                <div class="dropdown">
                    <li >
                        <a  className="dropbtn"><Link to="/whatido">what i do<span className='white-name'>.</span></Link></a>
                        <div className="dropdown-content">
                        <a href="#"><Link to="/coding">coding.</Link></a>
                        <a href="#"><Link to="/editing">editing.</Link></a>
                        {/* <a href="#"><Link to="/shares">sample things i did.</Link></a> */}
                        </div>
                    </li>
                </div>
                <li >
                    <a><Link to="/aboutme">about me<span className='white-name'>.</span></Link></a>
                </li>
                
            </ul>
        </nav>
        );
    };
    
export default Header;
    