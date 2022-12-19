import { Avatar } from '@mui/material'
import React from 'react'
import '../Style/SideBar.css'

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <p className='sidebar__hash'>#</p>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img alt="profile-background" src="https://media-exp1.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1676505600&v=beta&t=fnEPHR2L_xz8z6BImN0bWxvJ9F2kQqIM-U0Yf59kQ7g" />
                <Avatar className='sidebar-avatar' src={"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"} />
                <h2>Welcome, Rinaldo!</h2>
                <h4>rinaldobadigar98@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who's viewed you</p>
                    <p className='sidebar__statNumber'>2000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>1500</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("reactRedux")}
                {recentItem("firebase")}
                {recentItem("developer")}
                {recentItem("mongoDB")}
            </div>
        </div>
    )
}

export default SideBar