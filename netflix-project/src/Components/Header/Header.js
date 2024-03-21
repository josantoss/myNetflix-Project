import React from 'react'
import'./header.css'
function Header() {
    return (
        <div>
            <div className="Header-outer-container">
                <div className="Header-container">
                    <div className="Header-left-container">
                        <ul className="list-container">
                            <li>Netflix</li>
                            <li>home</li>
                            <li>contact</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="Header-right-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
