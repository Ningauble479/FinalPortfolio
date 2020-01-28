import React from 'react'


function classModal(props){
    return(
        <div className='__testing-Modal-Main'>
            <div className='__testing-Modal-Header'>
            <h1>{props.state.cardDisplay.name}</h1>
            <button value='class' onClick={props.closeModal}>close</button>
            </div>
            <div className='__testing-Modal-Body'>
                <div className='__testing-Modal-Column'>
                <h1>Proficiencies</h1>
                <ul>
                    {props.state.cardDisplay.proficiencies.map(
                        row =>(
                        <li>{row.name}</li>
                        )
                    )}
                </ul>
                </div>
                <div className='__testing-Modal-Column'>
                <h1>Saving Throws</h1>
                <ul>
                        {
                            props.state.cardDisplay.saving_throws.map(
                                row=>(
                                <li>{row.name}</li>
                                )
                            )
                        }
                </ul>
                </div>
                <div className='__testing-Modal-Column'>
                    {props.state.cardDisplayEquip == null ?
                    (<h1>Loading...</h1>)
                    :
                    (
                        <div>
                    
                        <h1>Sub Classes</h1>
                        <ul>
                        {props.state.cardDisplayEquip.map(
                            row=>(
                            <li>{row.quantity} {row.item.name}</li>
                            )
                        )}
                        </ul>
                        </div>
                    )
                    }       
                </div>
                <div className='__testing-Modal-Column'>
                    {
                        props.state.cardDisplayLevels == null ?
                        (null)
                        :
                    props.state.cardDisplayLevels.map(
                        row=>(
                            <div className='__testing-Modal-Levels'>
                                <h3>Level {row.level}</h3>
                                <p>Ability Score Bonuses: {row.ability_score_bonuses}</p>
                                <p>Prof bonus: {row.prof_bonus}</p>
                                <p>Features:</p>
                                <ul>
                                {row.features.map(
                                    row=>(
                                    <li>{row.name}</li>                                    
                                        )
                                )}
                                </ul>
                            </div>
                        )
                    )
                                    }
                </div>
            </div>
        </div>)
}

export default classModal