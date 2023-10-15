import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <ul className="headerList">
                <li>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/spotify-1-logo-black-and-white.png" alt="Spotify Logo" className="imageLogo" />
                </li>
                <li className="inputListItem">
                    <input type="text" placeholder="Search some stuff" className="input" />
                    <a href="" className="iconContainer">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                    </a>
                </li>
                <li className="profileListItem">
                    <div className="userProfile">
                        <img src="https://i.pinimg.com/1200x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg" alt="Spotify Logo" className="imageLogo" />
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header;
