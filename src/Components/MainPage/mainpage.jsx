import React from 'react'
import Home from '../homePage/homepage';
//import Home from './Components/homePage/homepage';
import UseContext from "..//..//useContext";
import Note from '../Notes/Notes';
//import UseContext from '../../useContext';
import Sidebar from '../Sidebar/sideBar';
import "./mainpage.css"

function Mainpage() {
    const { selected } = UseContext();
    return (
      
      <div className='mainPage'>
       <Sidebar/>
        {selected.length > 0 ? <Note/> : <Home />}
        
      </div>
    );
  }

export default Mainpage;
