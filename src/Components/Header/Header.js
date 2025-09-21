import React, { useState, useEffect } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/netflix_PNG15.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
    const [show, setShow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`header_outer_container ${show && "nav__black"}`}>
            <div className="header_container">
                <div className="header_left">
                    <div className="logo_container">
                        <img 
                            src={NetflixLogo} 
                            alt="Netflix Logo" 
                            width="50" 
                            onClick={scrollToTop}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <ul className={`nav_menu ${isMenuOpen ? 'nav_menu_active' : ''}`}>
                        <li onClick={scrollToTop}>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className="header_right">
                    <ul>
                        <li className="search_icon">
                            <SearchIcon />
                        </li>
                        <li className="notification_icon">
                            <NotificationsNoneIcon />
                        </li>
                        <li className="account_icon">
                            <AccountBoxIcon />
                        </li>
                        <li className="dropdown_icon">
                            <ArrowDropDownIcon />
                        </li>
                    </ul>
                    <div className="mobile_menu_toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
