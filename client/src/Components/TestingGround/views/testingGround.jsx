import React, { Component } from 'react';
import '../Styles/testingGround.css'

class testingGround extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <div className='__testing-Modal-Searches'>
              <button value='classes' onClick={this.props.constructURL}>classes</button>
              <button value='classes' onClick={this.props.constructURL}>classes</button>
              <button value='classes' onClick={this.props.constructURL}>classes</button>
              <button value='classes' onClick={this.props.constructURL}>classes</button>
              </div>
                {
                    this.props.state.modalOpen == true ?
                    (
                        <div className='__testing-Modal-Main'>
                            <div className='__testing-Modal-Header'>
                            <h1>{this.props.state.cardDisplay.name}</h1>
                            <button onClick={this.props.closeModal}>close</button>
                            </div>
                            <div className='__testing-Modal-Body'>
                                <div className='__testing-Modal-Column'>
                                <h1>Proficiencies</h1>
                                <ul>
                                    {this.props.state.cardDisplay.proficiencies.map(
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
                                            this.props.state.cardDisplay.saving_throws.map(
                                                row=>(
                                                <li>{row.name}</li>
                                                )
                                            )
                                        }
                                </ul>
                                </div>
                                <div className='__testing-Modal-Column'>
                                    {this.props.state.cardDisplayEquip == null ?
                                    (<h1>Loading...</h1>)
                                    :
                                    (
                                        <div>
                                    
                                        <h1>Sub Classes</h1>
                                        <ul>
                                        {this.props.state.cardDisplayEquip.map(
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
                                        this.props.state.cardDisplayLevels == null ?
                                        (null)
                                        :
                                    this.props.state.cardDisplayLevels.map(
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
                        </div>
                    )
                    :
                    (null)
                }
                <div className='__testing-Cards-Holder'>
                
                {
                    this.props.state.data == null ?
                    (<h3>please search for data</h3>)
                    :
                    (
                    
                    this.props.state.data.map(
                        row=>(
                        <div className='__testing-Cards'>
                            <h1 className='__testing-Cards-Header'>{row.name}</h1>
                            <button onClick={this.props.getInfo} value={row.url}>Get Info</button>
                        </div>
                        )
                    )
                    
                    
                    
)
                }
                </div>
            </div>
        );
    }
}

export default testingGround;


