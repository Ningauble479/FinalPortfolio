import React from 'react'

function referenceCards(){
    const references = [
        {
            name: 'Lonnie Paz',
            work: 'Marketer',
            know: 'Business Partner',
            number: '520-906-1694'
        },
        {
            name: 'Test Guy',
            work: 'Test stuff',
            know: 'lorem ipsum',
            number: '949-394-8138'
        },
        {
            name: 'Test Guy',
            work: 'Test stuff',
            know: 'lorem ipsum',
            number: '949-394-8138'
        },
        {
            name: 'Test Guy',
            work: 'Test stuff',
            know: 'lorem ipsum',
            number: '949-394-8138'
        },
        {
            name: 'Test Guy',
            work: 'Test stuff',
            know: 'lorem ipsum',
            number: '949-394-8138'
        }
    ]

    return(
        references.map( row => (
            <div className='__references-card-main'>
                <div className='__references-card-header'>
                    <h1>
                    {row.name}
                    </h1>
                </div>
                <div className='__references-card-body'>
                    <p>How i know this person:</p>
                    <p>{row.know}</p>
                    <p>What does this person do:</p>
                    <p>{row.work}</p>
                </div>
                <div className='__references-card-footer'>
                    <h3>Contact Info: </h3>
                    <h4>{row.number ? row.number : null}</h4>
                    <h4>{row.email ? row.email : null}</h4>
                </div>
            </div>
        )
        )
    )
}

export default referenceCards