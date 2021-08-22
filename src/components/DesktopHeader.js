import React from 'react';
import { Link } from 'react-router-dom';

const DesktopHeader = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <ul className="menu">

                    <li className="menu-item-has-children
                        has-mega-menu active">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>


                    <li className="menu-item-has-children has-mega-menu">
                        <Link className="nav-link"
                            to="/contact">Contact</Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default DesktopHeader
