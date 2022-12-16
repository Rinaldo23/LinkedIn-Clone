import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import LoopIcon from '@mui/icons-material/Loop';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <h4>{description}</h4>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <hr className='post__body__hr'></hr>

        <div className="post__buttons">
            <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOptions Icon={CommentIcon} title="Comment" color="gray"/>
            <InputOptions Icon={LoopIcon} title="Repost" color="gray"/>
            <InputOptions Icon={SendIcon} title="Send" color="gray"/>
        </div>

    </div>
  )
}

export default Post