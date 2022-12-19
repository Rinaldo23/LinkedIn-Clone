import React from 'react'
import '../Style/HeaderOption.css'
import Avatar from '@mui/material/Avatar';

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="HeaderOption__icon"/>}
        {avatar && <Avatar className="HeaderOption__icon" alt="Remy Sharp" src={avatar} />}
        <p>{title}</p>
    </div>
  )
}

export default HeaderOption