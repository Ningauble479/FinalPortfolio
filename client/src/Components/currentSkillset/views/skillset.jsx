import React from 'react'
import '../styles/skillset.css'


function skillset(){
    return(
        <div className='__skillset-main'>
            <div className='__skillset-languages'>
                <h1>Coding Languages/Frameworks And Database Languages:</h1>
                <ul>
                <li>Javascript. Level: Advanced</li>
                <li>Node/Express. Level: Profficient</li>
                <li>React. Level: Advanced</li>
                <li>mongoDB/Mongoose. Level: Profficient</li>
                </ul>
            </div>
            <div className='__skillset-OW-cards'>
                <button>API test</button>
            </div>
            
        </div>
    )
}

export default skillset