import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';
import AdminLink from './AdminLink';
import DesktopHeader from './DesktopHeader';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = (props) => {
    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);
    return (

        <header className="header">
            <div className="ps-top-bar">
                <div className="container">
                    <div className="top-bar">
                        <AdminLink></AdminLink>
                        <div
                            className="top-bar__right">
                            <ul className="nav-top">
                                <li
                                    className="nav-top-item contact"><Link
                                        className="nav-top-link"
                                        to="tel:970978-6290">
                                        <i
                                            className="icon-telephone"></i><span>Hotline:</span><span
                                                className="text-success
                                font-bold">84228-27990</span></Link></li>

                                <li
                                    className="nav-top-item languages"><Link
                                        className="nav-top-link"
                                        to="/">
                                        <span
                                            className="current-languages">English</span><i
                                                className="icon-chevron-down"></i></Link>
                                    <div
                                        className="select--dropdown">
                                        <ul
                                            className="select-languages">
                                            <li
                                                className="active
                                    language-item"
                                                data-value="English"><Link
                                                    to="/">English</Link></li>
                                            <li
                                                className="language-item"
                                                data-value="Brunei"><Link
                                                    to="/">Brunei</Link></li>
                                            <li
                                                className="language-item"
                                                data-value="Armenia"><Link
                                                    to="/">Armenia</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    className="nav-top-item
                        currency"><Link
                                        className="nav-top-link"
                                        to="/">
                                        <span
                                            className="current-currency">USD</span><i
                                                className="icon-chevron-down"></i></Link>
                                    <div
                                        className="select--dropdown">
                                        <ul
                                            className="select-currency">
                                            <li
                                                className="active
                                    currency-item"
                                                data-value="USD"><Link
                                                    to="/">USD</Link></li>
                                            <li
                                                className="currency-item"
                                                data-value="VND"><Link
                                                    to="/">VND</Link>
                                            </li>
                                            <li
                                                className="currency-item"
                                                data-value="EUR"><Link
                                                    to="/">EUR</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {!currentUser && (
                                    <>
                                        <li
                                            className="nav-top-item"><Link
                                                className="nav-top-link"
                                                to="/register">Register</Link>
                                        </li>
                                        <li
                                            className="nav-top-item"><Link
                                                className="nav-top-link"
                                                to="/login">Login</Link>
                                        </li>
                                    </>
                                )}
                                {currentUser && (
                                    <li
                                        className="nav-top-item account"><Link
                                            className="nav-top-link"
                                            to="/">
                                            <i
                                                className="icon-user"></i>Hi!
                                            <span
                                                className="font-bold">{currentUser.displayName}</span></Link>
                                        <div
                                            className="account--dropdown">
                                            <div
                                                className="account-anchor">
                                                <div
                                                    className="triangle"></div>
                                            </div>
                                            <div
                                                className="account__content">
                                                <ul
                                                    className="account-list">
                                                    <li
                                                        className="title-item"><Link
                                                            to="/">My
                                                            Account</Link></li>
                                                    <li><Link
                                                        to="/">Dasdboard</Link></li>
                                                    <li><Link
                                                        to="/">Account
                                                        Setting</Link></li>
                                                    <li><Link
                                                        to="shopping-cart.html">Orders</Link></li>
                                                    <li><Link
                                                        to="wishlist.html">Wishlist</Link></li>
                                                    <li><Link
                                                        to="/">Shipping
                                                        Address</Link></li>
                                                </ul>

                                                <hr /><Link
                                                    className="account-logout"
                                                    onClick={signOut}><i
                                                        className="icon-exit-left"></i>Log
                                                    out</Link>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-header--center
    header--mobile">
                <div className="container">
                    <div className="header-inner">
                        <div
                            className="header-inner__left">
                            <button
                                className="navbar-toggler"><i
                                    className="icon-menu"></i></button>
                        </div>
                        <div
                            className="header-inner__center"><Link
                                className="logo
                    open"
                                to="index.html"><img src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '240px' }} alt="company logo"></img></Link></div>
                        <div
                            className="header-inner__right">
                            <button
                                className="button-icon
                    icon-sm
                    search-mobile"><i
                                    className="icon-magnifier"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ps-header--center header-desktop">
                <div className="container">
                    <div className="header-inner">
                        <div
                            className="header-inner__left"><Link
                                className="logo"
                                to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '240px' }} alt="company logo"></img></Link>

                        </div>
                        <div
                            className="header-inner__center">
                            <div
                                className="input-group">
                                <div
                                    className="input-group-prepend">
                                    <div
                                        className="header-search-select"><span
                                            className="current">All</span>

                                    </div><i
                                        className="icon-magnifier
                            search"></i>
                                </div>
                                <input
                                    className="form-control
                        input-search"
                                    placeholder="I'm
                        searchching
                        for..."/>
                                <div
                                    className="input-group-append">
                                    <button
                                        className="btn">Search</button>
                                </div>
                            </div>

                            <div
                                className="result-search">
                                <ul className="list-result">

                                    <li
                                        className="cart-item">
                                        <div
                                            className="ps-product--mini-cart"><Link
                                                to="product-default.html"><img
                                                    className="ps-product__thumbnail"
                                                    src="img/products/01-Fresh/01_18a.jpg"
                                                    alt="alt"
                                                /></Link>
                                            <div
                                                className="ps-product__content"><Link
                                                    className="ps-product__name"
                                                    to="product-default.html"><u>Organic</u>
                                                    Large
                                                    Green
                                                    Bell
                                                    Pepper</Link>

                                                <p className="ps-product__meta">
                                                    <span
                                                        className="ps-product__price">$6.90</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div
                            className="header-inner__right">
                            <button
                                className="button-icon
                    icon-md"><i
                                    className="icon-repeat"></i></button><Link
                                        className="button-icon
                    icon-md"
                                        to="wishlist.html"><i
                                            className="icon-heart"></i><span
                                                className="badge
                        bg-warning">2</span></Link>
                            <div
                                className="button-icon
                    btn-cart-header"><i
                                    className="icon-cart
                        icon-shop5"></i><span
                                    className="badge
                        bg-warning">3</span>
                                <div
                                    className="mini-cart">
                                    <div
                                        className="mini-cart--content">
                                        <div
                                            className="mini-cart--overlay"></div>
                                        <div
                                            className="mini-cart--slidebar
                                cart--box">
                                            <div
                                                className="mini-cart__header">
                                                <div
                                                    className="cart-header-title">
                                                    <h5>Shopping
                                                        Cart(3)</h5><Link
                                                            className="close-cart"
                                                            to="/"><i
                                                                className="icon-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div
                                                className="mini-cart__products">
                                                <div
                                                    className="out-box-cart">
                                                    <div
                                                        className="triangle-box">
                                                        <div
                                                            className="triangle"></div>
                                                    </div>
                                                </div>
                                                <ul
                                                    className="list-cart">
                                                    <li
                                                        className="cart-item">
                                                        <div
                                                            className="ps-product--mini-cart"><Link
                                                                to="product-default.html"><img
                                                                    className="ps-product__thumbnail"
                                                                    src="img/products/01-Fresh/01_18a.jpg"
                                                                    alt="alt"
                                                                /></Link>
                                                            <div
                                                                className="ps-product__content"><Link
                                                                    className="ps-product__name"
                                                                    to="product-default.html">Extreme
                                                                    Budweiser
                                                                    Light
                                                                    Can</Link>
                                                                <p
                                                                    className="ps-product__unit">500g</p>
                                                                <p
                                                                    className="ps-product__meta">
                                                                    <span
                                                                        className="ps-product__price">$3.90</span><span
                                                                            className="ps-product__quantity">(x1)</span>
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="ps-product__remove"><i
                                                                    className="icon-trash2"></i></div>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                            <div
                                                className="mini-cart__footer row">
                                                <div className="col-6 title">TOTAL</div>
                                                <div className="col-6 text-right total">$29.98</div>
                                                <div
                                                    className="col-12 d-flex"><Link
                                                        className="view-cart"
                                                        to="shopping-cart.html">View
                                                        cart</Link><Link
                                                            className="checkout"
                                                            to="checkout.html">Checkout</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DesktopHeader />

        </header>

    )
}

Header.defaultProps = {
    currentUser: null
}





export default Header;
