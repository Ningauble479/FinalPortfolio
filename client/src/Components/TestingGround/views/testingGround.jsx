import React, { Component } from 'react';
import ClassModal from './classModal'
import MonsterModal from './monsterModal'
import '../Styles/testingGround.css'

class testingGround extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <div className='__testing-Modal-Searches'>
              <button value='classes' onClick={this.props.constructURL}>Classes</button>
              <button value='monsters' onClick={this.props.constructURL}>Monsters</button>
              <button value='spells' onClick={this.props.constructURL}>Spells</button>
              <button value='races' onClick={this.props.constructURL}>Races</button>
              </div>
                {
                    this.props.state.modalOpen == true ?
                    (<ClassModal state={this.props.state} closeModal={this.props.closeModal}/>
                    )
                    :
                    (null)
                }
                {
                    this.props.state.openModalM == true ?
                    (<MonsterModal state={this.props.state} closeModal={this.props.closeModal}/>)
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


