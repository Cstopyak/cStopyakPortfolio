import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Education from './components/Education';
//admin
import Admin from './components/adminComponents/Admin';

//edit components
import EditAbout from './components/editComponent/EditAbout';
import EditProject from './components/editComponent/EditProject';
import EditEducation from './components/editComponent/EditEducation';

//navbar scroll 
import { Element } from 'react-scroll';

//Admin Context
// import { DataContext } from './components/myContext/GlobalContext';


function App() {

    // const state = useContext(DataContext);
    // const [isLogin, setIsLogin] = state.isLogin;


  return (
    <div className="App">
      <NavBar />
      

      
      <Element className='Header'>
        <Route exact path="/" component={Header} />
      </Element>
      

      <Element className="About">
        <Route exact path="/" component={About} />
      </Element>

      <Element className='Education'>
        <Route exact path="/" component={Education} />
      </Element>

      <Element className='Projects'>
        <Route exact path="/" component={Project} />
      </Element>

      <Element className='Contact'>
        <Route exact path="/" component={Contact} />
      </Element>





      <Route exact path="/login" render={() => <Login/> } />

      <Route exact path="/admin" render={() =><Admin/>} />

      <Route exact path="/edit/:id" component={EditAbout} />
      <Route exact path="/editProject/:id" component={EditProject} />
      <Route exact path="/editEducation/:id" component={EditEducation} />

      <Route component={Footer}/>


    </div>
  )
}

export default App;


