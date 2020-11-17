import React from 'react'
import logoAnotea from '../Images/logo_Anotea_Horizontal_baseline2.png'
import "./Header.css"

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img className="taille_logo" src={logoAnotea} />
                <div>
                    <select name="pets" id="pet-select">
                        <option value="">Demandeur d'emploi</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>
            </div>)
    }
}


