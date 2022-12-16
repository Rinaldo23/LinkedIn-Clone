import React, { useEffect, useState } from 'react'
import './Feed.css'
import EditIcon from '@mui/icons-material/Edit';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import Post from './Post';
import { db } from './firebase'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';

function Feed() {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let obj = {
            name: "Rinaldo Badigar",
            description: "I am a Web Developer",
            message: input,
            timestamp: serverTimestamp(),
        }

        // await setDoc(doc(db, "Users", "Some-id"), obj); // agar unique userID na ho toh niche wala line use kr
        const docRef = await addDoc(collection(db, "Users"), obj)
        // console.log("Document written with ID: ", docRef.id);
        setInput('')
    }

    useEffect(() => {
        const q = query(collection(db, "Users"), orderBy("timestamp","desc"));  //query word important hai
        const unsubscribe = onSnapshot(q, (Snapshot) => {
            setPosts(
                Snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, [posts])

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__avatar">
                    <Avatar />
                    <div className="feed__input">
                        <EditIcon className='feed__editIcon' />
                        <form>
                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Start a Post' />
                            {/* <SendIcon type="submit" /> */}
                            <button onClick={handleSubmit} type="submit" hidden />
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

            {
                posts.map(({ id, data: { name, description, message } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                    />
                ))
            }

        </div>
    )
}

export default Feed