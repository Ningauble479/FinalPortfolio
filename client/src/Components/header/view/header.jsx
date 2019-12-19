import React from 'react'
import '../style/header.css'
import Navbar from './navbar'

function show(){
    return(
        <React.Fragment>
        <div className='__header-background'>
            <div className='__header-main'>
            <h1>Devon Owen Full Stack Developer Portfolio</h1>
            </div>
        </div>
        <Navbar/>
        </React.Fragment>
    )
}

export default show