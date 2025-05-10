import React, { Component } from 'react';
import "./Header.css";
import netflixlogo from '../../assets/images/netflix_rep.svg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    
        return (
            <dir className='header_outer_container'>
                
                    <div className='header_container'>
                        <div className='header_left'>
                            <ul>
                                <li><img src={netflixlogo} alt="Netflix Logo"width="100" /></li>
                                <li>Netflix</li>
                                <li>Home</li>
                                <li>TVShows</li>
                                <li>Movies</li>
                                <li>Lastest</li>
                                <li>MyList</li>
                                <li>Browser by Languages</li>
                            </ul>
                        </div>
                        <div className='header_right'>
                            <ul>
                                <li><SearchIcon/></li>
                                <li><NotificationsNoneIcon/></li>
                                <li><AccountBoxIcon/></li>
                                <li><ArrowDropDownIcon/></li>
                            </ul>
                        </div>
                    </div>
                
                
            </dir>
        );
    }


export default Header;
