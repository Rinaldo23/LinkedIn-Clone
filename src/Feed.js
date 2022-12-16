import React from 'react'
import './Feed.css'
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__avatar">
                    <Avatar />
                    <div className="feed__input">
                        <EditIcon className='feed__editIcon' />
                        <form>
                            <input type="text" placeholder='Start a Post' />
                            {/* <SendIcon type="submit" /> */}
                            <button type="submit" hidden />
                        </form>
                    </div>
                </div>

                <div className='feed__inputOptions'>
                    <InputOptions Icon={InsertPhotoIcon} title="Photo" color="#368fe9" />
                    <InputOptions Icon={YouTubeIcon} title="Video" color="#5f9b41" />
                    <InputOptions Icon={CalendarMonthIcon} title="Event" color="#c27d16" />
                    <InputOptions Icon={ArticleIcon} title="Write article" color="#e16645" />
                </div>
            </div>

            <Post name="Rinaldo" description="I am a web Developer" message="This is my first clone" />
        </div>
    )
}

export default Feed