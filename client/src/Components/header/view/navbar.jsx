import React from 'react'
import {Link} from 'react-router-dom'

function navBar(){
    return(
        <div className='__header-navbar-main'>
            <Link to='/' ><div className='__header-navbar-main-links'>Biography</div></Link>
            <Link to='/Websites' ><div className='__header-navbar-main-links'>Websites/Accomplishments</div></Link>
            <Link to='/References' ><div className='__header-navbar-main-links'>References</div></Link>
            <Link to='/Skillset' ><div className='__header-navbar-main-links'>Current Skillset</div></Link>
            <Link to='/Contact' ><div className='__header-navbar-main-links'>Contact Form</div></Link>
        </div>
    )
}

export default navBar