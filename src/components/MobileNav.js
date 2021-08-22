import React from 'react'
import MobileFooterNav from './MobileFooterNav';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';
import { Link } from 'react-router-dom';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const MobileNav = () => {

    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);

    return (
        <>
            <MobileFooterNav />
            <button className="btn scroll-top"><i className="icon-chevron-up"></i></button>
            <div className="ps-preloader" id="preloader">
                <div className="ps-preloader-section
        ps-preloader-left"></div>
                <div className="ps-preloader-section
        ps-preloader-right"></div>
            </div>
            <div className="ps-category--mobile">
                <div className="category__header">
                    <div className="category__title">All
                        Departments</div><span className="category__close"><i className="icon-cross"></i></span>
                </div>
                <div className="category__content">
                    <ul className="menu--mobile">
                        <li className="daily-deals
                category-item">
                            <Link to="flash-sale.html">Daily
                                Deals</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <nav className="navigation--mobile">
                <div className="navigation__header">
                    <div className="navigation__select">
                        <div className="languages">
                            <Link className="nav-top-link" to="/">
                                <span className="current-languages">English</span><i className="icon-chevron-down"></i></Link>
                            <div className="select--dropdown">
                                <ul className="select-languages">
                                    <li className="active
                            language-item" data-value="English">
                                        <Link to="/">English</Link>
                                    </li>
                                    <li className="language-item" data-value="Brunei">
                                        <Link to="/">Brunei</Link>
                                    </li>
                                    <li className="language-item" data-value="Armenia">
                                        <Link to="/">Armenia</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="currency">
                            <Link className="nav-top-link" to="/">
                                <span className="current-currency">USD</span><i className="icon-chevron-down"></i></Link>
                            <div className="select--dropdown">
                                <ul className="select-currency">
                                    <li className="active
                            currency-item" data-value="USD">
                                        <Link to="/">USD</Link>
                                    </li>
                                    <li className="currency-item" data-value="VND">
                                        <Link to="/">VND</Link>
                                    </li>
                                    <li className="currency-item" data-value="EUR">
                                        <Link to="/">EUR</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {!currentUser && (
                        <div className="navigation-title">
                            <button className="close-navbar-slide"><i className="icon-arrow-left"></i></button>
                            <div><span className="account">Login</span>
                                <Link className="dropdown-user" to="/" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><i className="icon-chevron-down"></i></Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownAccount">
                                    <Link className="dropdown-item" to="/login"><b>Login</b></Link>
                                    <Link className="dropdown-item" to="/register"><b>Sign Up</b></Link>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentUser && (
                        <div className="navigation-title">
                            <button className="close-navbar-slide"><i className="icon-arrow-left"></i></button>
                            <div><span> <i className="icon-user"></i>Hi,
                            </span><span className="account">{currentUser.displayName}</span>
                                <Link className="dropdown-user" to="/" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><i className="icon-chevron-down"></i></Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownAccount">
                                    <Link className="dropdown-item" to="/"><b>My
                                        Account</b></Link>
                                    <Link className="dropdown-item" to="/">Dashboard</Link>
                                    <Link className="dropdown-item" to="/">Account
                                        Setting</Link>
                                    <Link className="dropdown-item" to="shopping-cart.html">Orders</Link>
                                    <Link className="dropdown-item" to="wishlist.html">Wishlist</Link>
                                    <Link className="dropdown-item" to="/">Shipping
                                        Address</Link>
                                    <Link className="dropdown-divider">
                                    </Link>

                                    <Link className="dropdown-item" onClick={signOut}><i className="icon-exit-left"></i>Log
                                        out</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="navigation__content">
                    <ul className="menu--mobile">
                        <li className="menu-item-has-children">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>
                <div className="navigation__footer">
                    <ul className="menu--icon">
                        <li className="footer-item">
                            <Link className="footer-link" to="/"><i className="icon-history2"></i><span>Recent
                                viewed
                                product</span></Link>
                        </li>

                        <li className="footer-item">
                            <Link className="footer-link" to="/"><i className="icon-question-circle"></i><span>Help
                                &
                                Contact</span></Link>
                        </li>
                        <li className="footer-item">
                            <Link className="footer-link" to="/"><i className="icon-telephone"></i><span>HOTLINE:
                                <span className='text-success'>84228-27990</span>
                                (Free)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MobileNav
