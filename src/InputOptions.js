import React from 'react'

function InputOptions({Icon, title, color}) {
    return (
        <div className='inputOptions'>
            <Icon style={{color: color}}/>
            <p>{title}</p>
        </div>
    )
}

export default InputOptions