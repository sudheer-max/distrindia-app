import React from 'react';
import { Link } from 'react-router-dom';

const MobileFooterNav = () => {
    return (
        <div className="ps-footer-mobile">
            <div className="menu__content">
                <ul className="menu--footer">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className="icon-home3"></i><span>Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link
                    footer-category" to="/"><i className="icon-list"></i><span>Category</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link
                    footer-cart" to="/"><i className="icon-cart"></i><span className="badge
                        bg-warning">3</span><span>Cart</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className="icon-heart"></i><span>Wishlist</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="login-register.html"><i className="icon-user"></i><span>Account</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileFooterNav
