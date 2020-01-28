import React from 'react'

function MonsterModal(props) {
    let info = props.state.cardDisplayM
    return (
        <div className='__testing-Modal-Main'>
            <div className='__testing-Modal-Header'>
                <h1>{info.name}</h1>
                <button value='monster' onClick={props.closeModal}>close</button>
            </div>
            <div className='__testing-Modal-Body'>
                <div className='__testing-Modal-Column'>
                    <h1>Basic Info</h1>
    <p>Challenge Rating: {info.challenge_rating}</p>
                    <p>size: {info.size}</p>
                    <p>Type: {info.type}</p>
                    <p>SubType: {info.subtype == '' ? 'N/A' : info.subtype}</p>
                    <p>Alignment: {info.alignment}</p>
                    <p>Languages: {info.languages}</p>
                </div>
                <div className='__testing-Modal-Column'>
                    <h1>Battle Info</h1>
                    <p>Armor Class: {info.armor_class}</p>
                    <p>Hit Points: {info.hit_points}</p>
                    <p>Hit Dice: {info.hit_dice}</p>
                    <p>Speed: {info.speed}</p>
                    <p>Strength: {info.strength}</p>
                    <p>Dexterity: {info.dexterity}</p>
                    <p>Constitution: {info.constitution}</p>
                    <p>Intelligence: {info.intelligence}</p>
                    <p>Wisdom: {info.wisdom}</p>
                    <p>Charisma: {info.charisma}</p>
                    <p>Dexterity Save: {info.dexterity_save}</p>
                    <p>Constitution Save: {info.constitution_save}</p>
                    <p>Wisdom Save: {info.wisdom_save}</p>
                    <p>Charisma Save: {info.charisma_save}</p>
                    <p>Perception: {info.perception}</p>
                    <p>Stealth: {info.stealth}</p>

                </div>
                <div className='__testing-Modal-Column'>
                    <h1>Actions</h1>
                    {info.actions.map(
                        row => (
                            <div>
                                <h2>{row.name}</h2>
                                <ul>
                                    <li>Damage Dice: {row.damage_dice}</li>
                                    <li>Attack Bonus: {row.attack_damage}</li>
                                    <li>Description: {row.desc}</li>
                                </ul>
                            </div>
                        )
                    )}
                    {info.special_abilities ?

                        (
                            <div>
                                <h1>Special Abilities</h1>
                                {info.special_abilities.map(
                                    row => (
                                        <div>
                                            <h3>{row.name}</h3>
                                            <ul>
                                                <li>Attack Bonus: {row.attack_bonus}</li>
                                                <li>Description: {row.desc}</li>
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                        )
                        :
                        (null)}
                    {info.legendary_actions ?

                        (
                            <div>
                                <h1>Legendary Actions</h1>
                                {info.legendary_actions.map(
                                    row => (
                                        <div>
                                            <h3>{row.name}</h3>
                                            <ul>
                                                <li>Attack Bonus: {row.attack_bonus}</li>
                                                <li>Description: {row.desc}</li>
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                        )
                        :
                        (null)}
                </div>
            </div>
        </div>
    )

}

export default MonsterModal