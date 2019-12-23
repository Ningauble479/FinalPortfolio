import React from 'react'
import {Link} from 'react-router-dom'

function navBar(){
    return(
        <div className='__header-navbar-main'>
            <Link to='/' ><div className='__header-navbar-main-links'>Biography</div></Link>
            <Link to='/Websites' ><div className='__header-navbar-main-links'>Websites/Accomplishments</div></Link>
            <Link to='/References' ><div className='__header-navbar-main-links'>References</div></Link>
            <Link to='/Skillset' ><div className='__header-navbar-main-links'>Current Skillset</div></Link>
            <Link to='/TestingGround' ><div className='__header-navbar-main-links'>Dungeons And Dragons</div></Link>
        </div>
    )
}

export default navBar