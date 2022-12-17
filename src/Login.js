import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    return (
        <div className='login'>
            <img src='https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png' />
            <div className='login-container'>
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Full Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                    error != '' && <p style={{ color: 'red', margin: '0.5rem' }}>{error}</p>
                }

                <Button style={{ marginTop: '0.5rem' }} variant="contained" fullWidth component="label" disabled={loading} >
                    Login
                </Button>
                <p style={{ color: 'blue', fontSize: '0.9rem' }}>Forgot Password?</p>
            </div>
            <div className='bottom-container'>
                Don't have an account? <span style={{ color: 'blue', marginLeft: '5px' }} >Sign up</span>
            </div>
        </div>
    )
}

export default Login