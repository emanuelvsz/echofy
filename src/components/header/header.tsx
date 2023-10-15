import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../../models/User';

interface HeaderProps {
  userData?: UserData | null;
}

function Header({ userData }: HeaderProps = {}) {
  return (
    <header className="header">
      <ul className="headerList">
        <li>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/spotify-1-logo-black-and-white.png" alt="Spotify Logo" className="imageLogo" />
        </li>
        <li className="inputListItem">
          <input type="text" placeholder="Search some stuff" className="input" />
          <a href="" className="iconContainer">
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          </a>
        </li>
        <li className="profileListItem">
          <a href={userData?.uri}>
            {userData && (
                <div className="userProfile">
                <img src={userData.picture_url} alt="User Profile" className="imageLogo" />
                </div>
            )}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
