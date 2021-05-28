import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/NavBar.css";
import { DataContext } from '../components/myContext/GlobalContext';
//scroll
import {scroller} from 'react-scroll';




const NavBar = () => {


  //login Navbar
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;
  const [toggle, setToggle] = useState();


  //scroll
  const scrollToElement = (element)=>[
    scroller.scrollTo(element,{
      duration:800,
      delay:50,
      smooth:true,
      offset:-18
    })
  ]


  //creating toggle functionality
  const toggleAction = () => {
    setToggle(!toggle)
  }

  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false)
    }
  }

//clearing storage and logging out
  const logOutSubmit = () =>{
    localStorage.clear();
    setIsLogin(false);
  }


  return (
    <div className="nav-container">
      <nav>
        <div className="logoBtn">
          <span><b><a href="https://www.linkedin.com/in/colby-stopyak-0ab384143/"><i className="fab fa-linkedin"></i></a></b></span>
        {/* <span><b>Cv:</b> <a href="/#" target="_blank" rel="noreferrer"><i className="fas fa-file-pdf"></i></a></span> */}
          <div className="btn" onClick={toggleAction}>
            <div className={toggle ? "bar1 animationBar" : "bar bar1"}></div>
            <div className={toggle ? "bar2 animationBar" : "bar bar2"}></div>
            <div className={toggle ? "bar3 animationBar" : " bar3"}></div>
          </div>

        </div>
        <div className="links-container">
          <ul className={toggle ? "new-links links" : "links"} onClick={closeNavbar}>
            <li onClick={()=>scrollToElement('home')}><Link to="/">Home</Link></li>
            <li onClick={()=>scrollToElement('About')}><Link to="/">About</Link></li>
            <li onClick={()=>scrollToElement('Education')}><Link to="/">Education</Link></li>
            <li onClick={()=>scrollToElement('Projects')}><Link to="/">Projects</Link></li>
            <li onClick={()=>scrollToElement('Contact')}><Link to="/">Contact</Link></li>
            
            {/* <li className="admin"><Link to="/admin">Admin</Link></li> */}
            {/* <li><Link to="/login">Login</Link></li> */}
            <li className={isLogin?'':'adminLi'}><Link to={isLogin?"/admin/":"/"}>{isLogin?<div className="admin">Admin</div>:''}</Link></li>


            <li onClick={logOutSubmit}><Link to={isLogin? '/':"/login"}> {isLogin?"Logout":"Login"}</Link></li>
          </ul>
        </div>




      </nav>
    </div>
  )
}
export default NavBar;
