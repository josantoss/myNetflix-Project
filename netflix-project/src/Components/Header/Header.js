import React from 'react'
import './header.css'
import Netflexlogo from '../../assets/Images/Netflexlogo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    return (
      <div>
        <div className="Header-outer-container">
          <div className="Header-container">
            <div className="Header-left-container">
              <ul className="list-container">
                <li>
                  <img src={Netflexlogo} alt="Netflex Logo" width="100" />
                </li>
                <li>home</li>
                <li>contact</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
                </div>
                <div className="Header-right-container">
                <ul>
                    <li>
                    <SearchIcon />
                    </li>
                    <li>
                    <NotificationsNoneIcon />
                    </li>
                    <li>
                    <AccountBoxIcon />
                    </li>
                    <li>
                    <ArrowDropDownIcon />
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header
