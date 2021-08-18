import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const Footer = () => {

    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);

    return (
        <>
            <footer className="ps-footer">
                <div className="container">
                    <div className="ps-footer--contact">
                        <div className="row">
                            <div className="col-12
                    col-lg-4">
                                <p className="contact__title">Contact
                                    Us</p>
                                <p><b><i className="icon-telephone">
                                </i>Hotline:
                                </b><span>(7:00
                                    - 21:30)</span></p>
                                <p className="telephone">84228-27990<br />+33 6 76 67 57 26</p>
                                <p> <b>Head office:
                                </b>PLOT NO E-71, ADDITIONAL MIDC, PATALGANGA, TAL- PANVEL, DIST - RAIGAD PANVEL RAIGARH MH 410207 IN</p>
                                <p> <b>Email us:
                                </b>
                                    <Link>welcome@distrindia.com</Link>
                                </p>
                            </div>
                            <div className="col-12
                    col-lg-4">
                                <div className="row">
                                    <div className="col-12
                            col-lg-6">
                                        <p className="contact__title">Help
                                            & Info<span className="footer-toggle"><i className="icon-chevron-down"></i></span></p>
                                        <ul className="footer-list">
                                            <li>
                                                <Link to="/">About
                                                    Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Contact</Link>
                                            </li>

                                            <li>
                                                <Link to="/">Terms
                                                    of
                                                    Use</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Policy</Link>
                                            </li>

                                            <li>
                                                <Link to="/">FAQs</Link>
                                            </li>
                                        </ul>
                                        <hr />
                                    </div>

                                </div>
                            </div>
                            <div className="col-12
                    col-lg-4">
                                <p className="contact__title">Newsletter
                                    Subscription</p>
                                <p>Join our email
                                    subscription now
                                    to get updates
                                    on <b>promotions
                                    </b>and <b>coupons.</b></p>
                                <div className="input-group">
                                    <div className="input-group-prepend"><i className="icon-envelope"></i></div>
                                    <input className="form-control" type="text" placeholder="Enter
                            your
                            email..."/>
                                    <div className="input-group-append">
                                        <button className="btn">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row
            ps-footer__copyright">
                        <div className="col-12 col-lg-6
                ps-footer__text">&copy;
                            {new Date().getFullYear()} Distrindia
                            Marhetplace. All Rights
                            Reversed.</div>
                        <div className="col-12 col-lg-6
                ps-footer__social">
                            <div className="service__payment">
                                <img src="img/promotion/payment_paypal.jpg" alt="payment" />
                                <img src="img/promotion/payment_visa.jpg" alt="payment" />
                                <img src="img/promotion/payment_mastercart.jpg" alt="payment" />
                                <img src="img/promotion/payment_electron.jpg" alt="payment" />
                                <img src="img/promotion/payment_skrill.jpg" alt="payment" /></div>
                        </div>
                    </div>
                </div>
            </footer>
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
                            <div>
                                <Link className="dropdown-user" to="/" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><i className="icon-chevron-down"></i></Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownAccount">
                                    <Link className="dropdown-item" to="/login"><b>Login</b></Link>
                                    <Link className="dropdown-item" to="/register">Register</Link>

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
                            <Link to="/">Shop</Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/">Pages</Link>

                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/">Blog</Link>

                        </li>
                        <li className="menu-item-has-children">
                            <Link to="product-default.html">Brand</Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="flash-sale.html">Flash
                                Sale</Link>
                        </li>
                    </ul>
                    <ul className="menu--mobile">
                        <li className="daily-deals">
                            <Link>daily
                                deals</Link>
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

export default Footer
