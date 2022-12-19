import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../Style/Header.css'
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className='header'>

            <div className='header__left'>
                <LinkedInIcon className='linkedin-logo'/>
                <div className='header__search'>
                    <SearchIcon />
                    <input type='text'></input>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={PeopleAltIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={MessageRoundedIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"} title="Ronaldo"/>
            </div>

        </div>
    )
}

export default Header