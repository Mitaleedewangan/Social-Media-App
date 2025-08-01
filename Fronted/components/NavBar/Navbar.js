import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
// import Person from "../../assets/person.jpeg";
import "./navbar.scss"
// import { Home } from '@mui/icons-material';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import {AuthContext} from  "../../context/authContext";



const Navbar =() =>{
    const {darkMode,toggle}=useContext(DarkModeContext);
    const {currentUser}=useContext(AuthContext);

    return(
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>SocialMedia</span>
                </Link>
                <HomeOutlinedIcon/>
                { darkMode ?(<WbSunnyOutlinedIcon onClick={toggle}/>):(<DarkModeOutlinedIcon onClick={toggle}/> )}
                <GridViewOutlinedIcon/>
              <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..."/>

              </div>

            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className='user'>
                    <img src ="/assets/person.jpeg" alt="profile"/>
                    <span>{currentUser.name}</span>
            </div>
        </div>
    </div> 
    )
    
}

export default Navbar;