import React from 'react'
import '../style/cards.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function card(){
    return(
        <div className='__cards-roshi-background'>
        <div className="__cards-roshi">
            <div className="__cards-header">   
                <h1>Roshi Health</h1>
            </div>
            <div className="__cards-body">
                <p>Roshi Health is a tech startup that i am a partial owner of.</p>
                <p>It is my first major project as a web developer. I did all the work by myself.</p>
                <p>Tech stack used:</p>
                <div className='__cards-body-tech-stack'>
                    <ul style={{width: '50%'}}>
                        <li>Front-end: javascript/react</li>
                        <li>Back-end: node/express</li>
                        <li>Database: mongoDB/mongoose</li>
                    </ul>
                    <ul style={{width: '50%'}}>
                    </ul>
                </div>
            </div>
            <div className='__cards-footer'>
                <a href='https://github.com/platyhelminthes/Platyhelminthes'><GitHubIcon style={{color: 'orange', fontSize: '50px'}}/></a>
                <a href='https://www.roshihealth.com'><LanguageIcon style={{color: 'orange', fontSize: '50px'}}/></a>
                <a ><FacebookIcon style={{color: 'orange', fontSize: '50px'}}/></a>
                <a href='https://www.linkedin.com/in/devon-owen-124342138/'><LinkedInIcon style={{color: 'orange', fontSize: '50px'}}/></a>

            </div>
        </div>
        </div>
    )
}

export default card