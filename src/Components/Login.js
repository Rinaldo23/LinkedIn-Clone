import { Button, TextField } from '@mui/material'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, db, storage } from '../firebase'
import '../Style/Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [file, setFile] = useState(null)

    const dispatch = useDispatch();

    const loginToApp = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            setError('')
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Logged In")
        } catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(() => {
                setError('')
            }, 2000);
        }
        setLoading(false)


    }

    let registerUser = async () => {
        if (!name) {
            return alert("Please enter a Name")
        }

        if (!email) {
            return alert("Please enter a email")
        }

        if (!password) {
            return alert("Please enter a password")
        }

        try {
            setLoading(true)
            setError('')
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Signed Up")

            const storageRef = ref(storage, `Profile-pics/${user.user.uid}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);

                        let userObj = {
                            displayName: name,
                            email: email,
                            uid: user.user.uid,
                            photoURL: downloadURL,
                        }
                        await setDoc(doc(db, "Signedup-users", user.user.uid), userObj);
                    });
                }
            );

            dispatch(login({
                email: user.user.email,
                // name: user.user.displayName, // Dikha he nhi raha
                // photoURL: user.user.downloadURL, //Null
                uid: user.user.uid
            }))
        }
        catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(() => {
                setError('')
            }, 2000);
        }

        setLoading(false)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='login'>
            <img src='https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png' />
            <div className='login-container'>
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Full Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button style={{ marginTop: '0.5rem' }} variant="outlined" fullWidth component="label">
                    Profile pic
                    <input hidden accept="image/*" multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Button>
                <Button onClick={loginToApp} style={{ marginTop: '0.6rem' }} variant="contained" fullWidth component="label" disabled={loading} >
                    Login
                </Button>
                {/* {
                    error != '' && <div style={{ color: 'red', margin: '0.5rem' }}>{error}</div>
                } */}
                <p style={{ color: 'blue', fontSize: '0.9rem' }}>Forgot Password?</p>
            </div>
            <div onClick={registerUser} className='bottom-container'>
                Don't have an account? <span style={{ color: 'blue', marginLeft: '5px' }} >Sign Up</span>
            </div>
        </div>
    )
}

export default Login