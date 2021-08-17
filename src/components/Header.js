import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = (props) => {
    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const {currentUser} = useSelector(mapState);
    return (
        <header className="header">
            <div className="ps-top-bar">
                <div className="container">
                    <div className="top-bar">
                        <div className="top-bar__left">
                            <ul className="nav-top">
                                <li className="nav-top-item"><Link className="nav-top-link" to="/">Sell on Famart.</Link></li>
                                
                            </ul>
                        </div>
                        <div className="top-bar__right">
                            <ul className="nav-top">
                                <li className="nav-top-item contact"><Link className="nav-top-link" to="tel:970978-6290"> <i className="icon-telephone"></i><span>Hotline:</span><span className="text-success font-bold">970 978-6290</span></Link></li>
                                <li className="nav-top-item"><Link className="nav-top-link" to="order-tracking.html">Order Tracking</Link></li>
                                <li className="nav-top-item languages"><Link className="nav-top-link" to="/"> <span className="current-languages">English</span><i className="icon-chevron-down"></i></Link>
                                    <div className="select--dropdown">
                                        <ul className="select-languages">
                                            <li className="active language-item" data-value="English"><Link to="/">English</Link></li>
                                            <li className="language-item" data-value="Brunei"><Link to="/">Brunei</Link></li>
                                            <li className="language-item" data-value="Armenia"><Link to="/">Armenia</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-top-item currency"><Link className="nav-top-link" to="/"> <span className="current-currency">USD</span><i className="icon-chevron-down"></i></Link>
                                    <div className="select--dropdown">
                                        <ul className="select-currency">
                                            <li className="active currency-item" data-value="USD"><Link to="/">USD</Link></li>
                                            <li className="currency-item" data-value="VND"><Link to="/">VND</Link></li>
                                            <li className="currency-item" data-value="EUR"><Link to="/">EUR</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-top-item account">

                                    {!currentUser && (
                                        <>
                                        <Link className="nav-top-link text-success" to="/register">Register Now</Link>
                                        <Link className="nav-top-link" to="/login"><span className="font-bold">Login</span></Link>
                                        </>
                                    )}

                                    {currentUser && (
                                        <>
                                        <Link className="nav-top-link" to="/"> <i className="icon-user"></i>Hi! <span className="font-bold">{currentUser.displayName}</span></Link>
                                        <div className="account--dropdown">
                                            <div className="account-anchor">
                                                <div className="triangle"></div>
                                            </div>
                                            <div className="account__content">
                                                <ul className="account-list">
                                                    <li className="title-item">My Account</li>
                                                    <li><Link to="/my-account">Dasdboard</Link></li>
                                                    <li><span className="font-bold">{currentUser.email}</span></li>
                                                    <li><Link to="shopping-cart.html">Orders</Link></li>
                                                    <li><Link to="wishlist.html">Wishlist</Link></li>
                                                    <li><Link to="/">Shipping Address</Link></li>
                                                </ul>
                                                <hr />
                                                <ul className="account-list">
                                                    <li className="title-item"><Link to="/">Settings</Link></li>
                                                    <li><Link to="/">Dasdboard</Link></li>
                                                    <li><Link to="/">Products</Link></li>
                                                    <li><Link to="shopping-cart.html">Orders</Link></li>
                                                    <li><Link to="/">Settings</Link></li>
                                                    <li><Link to="vendor-store.html">View Store</Link></li>
                                                </ul>
                                                <hr /><button className="account-logout" onClick={() => signOut()}><i className="icon-exit-left" ></i>Log out</button>
                                            </div>
                                        </div>
                                        </>
                                    )}
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-header--center header--mobile">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-inner__left">
                            <button className="navbar-toggler"><i className="icon-menu"></i></button>
                        </div>
                        <div className="header-inner__center"><Link className="logo open" to="index.html">Farm<span className="text-black">art.</span></Link></div>
                        <div className="header-inner__right">
                            <button className="button-icon icon-sm search-mobile"><i className="icon-magnifier"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ps-header--center header-desktop">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-inner__left"><Link className="logo" to="index.html">Farm<span className="text-black">art.</span></Link>
                            <ul className="menu">
                                <li className="menu-item-has-children has-mega-menu">
                                    <button className="category-toggler"><i className="icon-menu"></i></button>
                                    <div className="mega-menu mega-menu-category">
                                        <ul className="menu--mobile menu--horizontal">
                                            <li className="daily-deals category-item"><Link to="flash-sale.html">Daily Deals</Link></li>
                                            <li className="category-item"><Link to="shop-categories.html">Top Promotions</Link></li>
                                            <li className="category-item"><Link className="active" to="shop-categories.html">New Arrivals</Link></li>
                                            <li className="has-mega-menu category-item"><Link to="/">Fresh</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <div className="mega-menu">
                                                    <div className="mega-anchor"></div>
                                                    <div className="mega-menu__column">
                                                        <h4>Fruit<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="shop-view-grid.html">Apples</Link></li>
                                                            <li><Link to="shop-view-grid.html">Bananas</Link></li>
                                                            <li><Link to="shop-view-grid.html">Berries</Link></li>
                                                            <li><Link to="shop-view-grid.html">Oranges & Easy Peelers</Link></li>
                                                            <li><Link to="shop-view-grid.html">Grapes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Lemons & Limes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Peaches & Nectarines</Link></li>
                                                            <li><Link to="shop-view-grid.html">Pears</Link></li>
                                                            <li><Link to="shop-view-grid.html">Melon</Link></li>
                                                            <li><Link to="shop-view-grid.html">Avocados</Link></li>
                                                            <li><Link to="shop-view-grid.html">Plums & Apricots</Link></li>
                                                            <li className="see-all"><Link to="shop-view-grid.html">See all products <i className='icon-chevron-right'></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column">
                                                        <h4>Vegetables<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="shop-view-grid.html">Potatoes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Carrots & Root Vegetables</Link></li>
                                                            <li><Link to="shop-view-grid.html">Broccoli & Cauliflower</Link></li>
                                                            <li><Link to="shop-view-grid.html">Cabbage, Spinach & Greens</Link></li>
                                                            <li><Link to="shop-view-grid.html">Onions, Leeks & Garlic</Link></li>
                                                            <li><Link to="shop-view-grid.html">Mushrooms</Link></li>
                                                            <li><Link to="shop-view-grid.html">Tomatoes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Beans, Peas & Sweetcom</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="has-mega-menu category-item"><Link to="/">Food Cupboard</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <div className="mega-menu">
                                                    <div className="mega-anchor"></div>
                                                    <div className="mega-menu__column">
                                                        <h4>Crisps, Snacks &amp; Nuts<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="shop-view-grid.html">Crisps & Popcorn</Link></li>
                                                            <li><Link to="shop-view-grid.html">Nuts & Seeds</Link></li>
                                                            <li><Link to="shop-view-grid.html">Lighter Options</Link></li>
                                                            <li><Link to="shop-view-grid.html">Cereal Bars</Link></li>
                                                            <li><Link to="shop-view-grid.html">Breadsticks & Pretzels</Link></li>
                                                            <li><Link to="shop-view-grid.html">Fruit Snacking</Link></li>
                                                            <li><Link to="shop-view-grid.html">Rice & Corn Cakes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Protein & Energy Snacks</Link></li>
                                                            <li><Link to="shop-view-grid.html">Toddler Snacks</Link></li>
                                                            <li><Link to="shop-view-grid.html">Meat Snacks</Link></li>
                                                            <li><Link to="shop-view-grid.html">Beans</Link></li>
                                                            <li><Link to="shop-view-grid.html">Lentils</Link></li>
                                                            <li><Link to="shop-view-grid.html">Chickpeas</Link></li>
                                                            <li className="see-all"><Link to="shop-view-grid.html">See all products <i className='icon-chevron-right'></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column">
                                                        <h4>Tins &amp; Cans<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="shop-view-grid.html">Tomatoes</Link></li>
                                                            <li><Link to="shop-view-grid.html">Baked Beans, Spaghetti</Link></li>
                                                            <li><Link to="shop-view-grid.html">Fish</Link></li>
                                                            <li><Link to="shop-view-grid.html">Beans & Pulses</Link></li>
                                                            <li><Link to="shop-view-grid.html">Fruit</Link></li>
                                                            <li><Link to="shop-view-grid.html">Caconut Milk & Cream</Link></li>
                                                            <li><Link to="shop-view-grid.html">Lighter Options</Link></li>
                                                            <li><Link to="shop-view-grid.html">Olives</Link></li>
                                                            <li><Link to="shop-view-grid.html">Sweetcorn</Link></li>
                                                            <li><Link to="shop-view-grid.html">Carrots</Link></li>
                                                            <li><Link to="shop-view-grid.html">Peas</Link></li>
                                                            <li><Link to="shop-view-grid.html">Mixed Vegetables</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column"><Link className="mega-menu__thumbnail" to="flash-sale.html"><img src="img/promotion/mega_food.jpg" alt="alt" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="category-item"><Link to="shop-categories.html">Bakery</Link></li>
                                            <li className="category-item"><Link to="shop-categories.html">Frozen Foods</Link></li>
                                            <li className="has-mega-menu category-item"><Link to="/">Ready Meals</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <div className="mega-menu">
                                                    <div className="mega-anchor"></div>
                                                    <div className="mega-menu__column">
                                                        <h4>Ready Meals<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="/">Meals for 1</Link></li>
                                                            <li><Link to="/">Meals for 2</Link></li>
                                                            <li><Link to="/">Indian</Link></li>
                                                            <li><Link to="/">Italian</Link></li>
                                                            <li><Link to="/">Chinese</Link></li>
                                                            <li><Link to="/">Traditional British</Link></li>
                                                            <li><Link to="/">Thai & Oriental</Link></li>
                                                            <li><Link to="/">Mediterrancan & Moroccan</Link></li>
                                                            <li><Link to="/">Mexican & Caribbean</Link></li>
                                                            <li><Link to="/">Lighter Meals</Link></li>
                                                            <li><Link to="/">Lunch & Veg Pots</Link></li>
                                                            <li className="see-all"><Link to="/">See all products <i className='icon-chevron-right'></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column">
                                                        <h4>Salad &amp; Herbs<span className="sub-toggle"></span></h4>
                                                        <ul className="sub-menu--mega">
                                                            <li><Link to="/">Salad Bags</Link></li>
                                                            <li><Link to="/">Cucumber</Link></li>
                                                            <li><Link to="/">Tomatoes</Link></li>
                                                            <li><Link to="/">Lettuce</Link></li>
                                                            <li><Link to="/">Lunch Salad Bowls</Link></li>
                                                            <li><Link to="/">Fresh Herbs</Link></li>
                                                            <li><Link to="/">Avccados</Link></li>
                                                            <li><Link to="/">Peppers</Link></li>
                                                            <li><Link to="/">Coleslaw & Potato Salad</Link></li>
                                                            <li><Link to="/">Spring Onions</Link></li>
                                                            <li><Link to="/">Chili, Ginger & Ganic</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column"><Link className="mega-menu__thumbnail" to="flash-sale.html"><img src="img/promotion/mega_ready.jpg" alt="alt" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="category-item"><Link to="shop-categories.html">Drinks, Tea & Coffee</Link></li>
                                            <li className="category-item"><Link to="shop-categories.html">Beer, Wine & Spirits</Link></li>
                                            <li className="category-item"><Link to="shop-categories.html">Baby & Child</Link></li>
                                            <li className="category-item"><Link to="shop-categories.html">Kitchen & Dining</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="header-inner__center">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="header-search-select"><span className="current">All<i className="icon-chevron-down"></i></span>
                                        <ul className="list">
                                            <li className="category-option active" data-value="option"><Link to="/">All</Link></li>
                                            <li className="category-option"><Link>Fresh</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <ul>
                                                    <li><Link to="/">Meat & Poultry</Link></li>
                                                    <li><Link to="/">Fruit</Link></li>
                                                    <li><Link to="/">Vegetables</Link></li>
                                                    <li><Link to="/">Milks, Butter & Eggs</Link></li>
                                                    <li><Link to="/">Fish</Link></li>
                                                    <li><Link to="/">Frozen</Link></li>
                                                    <li><Link to="/">Cheese</Link></li>
                                                    <li><Link to="/">Pasta & Sauce</Link></li>
                                                </ul>
                                            </li>
                                            <li className="category-option"><Link>Food Cupboard</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <ul>
                                                    <li><Link to="/">Crisps, Snacks & Nuts</Link></li>
                                                    <li><Link to="/">Breakfast Cereals</Link></li>
                                                    <li><Link to="/">Tins & Cans</Link></li>
                                                    <li><Link to="/">Chocolate & Sweets</Link></li>
                                                </ul>
                                            </li>
                                            <li className="category-option" data-value="Bakery"><Link to="/">Bakery</Link></li>
                                            <li className="category-option" data-value="Drinks, Tea &amp; Coffee"><Link to="/">Drinks, Tea &amp; Coffee</Link></li>
                                            <li className="category-option" data-value="Frozen Foods"><Link to="/">Frozen Foods</Link></li>
                                            <li className="category-option"><Link>Ready Meals</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                                <ul>
                                                    <li><Link to="/">Traditional British</Link></li>
                                                    <li><Link to="/">Indian</Link></li>
                                                    <li><Link to="/">Italian</Link></li>
                                                    <li><Link to="/">Chinese</Link></li>
                                                </ul>
                                            </li>
                                            <li className="category-option" data-value="Beer, Wine &amp; Spirits"><Link to="/">Beer, Wine &amp; Spirits</Link></li>
                                            <li className="category-option" data-value="Baby &amp; Child"><Link to="/">Baby &amp; Child</Link></li>
                                            <li className="category-option" data-value="Kitchen &amp; Dining"><Link to="/">Kitchen &amp; Dining</Link></li>
                                        </ul>
                                    </div><i className="icon-magnifier search"></i>
                                </div>
                                <input className="form-control input-search" placeholder="I'm searchching for..." />
                                <div className="input-group-append">
                                    <button className="btn">Search</button>
                                </div>
                            </div>
                            <div className="trending-search">
                                <ul className="list-trending">
                                    <li className="title"><Link>Trending search: </Link></li>
                                    <li className="trending-item"><Link to="/">meat</Link></li>
                                    <li className="trending-item"><Link to="/">fruit</Link></li>
                                    <li className="trending-item"><Link to="/">vegetables</Link></li>
                                    <li className="trending-item"><Link to="/">salad</Link></li>
                                    <li className="trending-item"><Link to="/">yoghurts</Link></li>
                                    <li className="trending-item"><Link to="/">apple</Link></li>
                                </ul>
                            </div>
                            <div className="result-search">
                                <ul className="list-result">
                                    <li className="cart-item">
                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></Link>
                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html"><u>Organic</u> Large Green Bell Pepper</Link>
                                                <p className="ps-product__rating">
                                                    <select className="rating-stars">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3" selected="selected">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select><span>(5)</span>
                                                </p>
                                                <p className="ps-product__meta"> <span className="ps-product__price">$6.90</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-item">
                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></Link>
                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Avocado <u>Organic</u> Hass Large</Link>
                                                <p className="ps-product__meta"> <span className="ps-product__price">$12.90</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-item">
                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_32a.jpg" alt="alt" /></Link>
                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Tailgater Ham <u>Organic</u> Sandwich</Link>
                                                <p className="ps-product__meta"> <span className="ps-product__price">$33.49</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-item">
                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_6a.jpg" alt="alt" /></Link>
                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Extreme <u>Organic</u> Light Can</Link>
                                                <p className="ps-product__rating">
                                                    <select className="rating-stars">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4" selected="selected">4</option>
                                                        <option value="5">5</option>
                                                    </select><span>(16)</span>
                                                </p>
                                                <p className="ps-product__meta"> <span className="ps-product__price-sale">$4.99</span><span className="ps-product__is-sale">$8.99</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-item">
                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_22a.jpg" alt="alt" /></Link>
                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Extreme <u>Organic</u> Light Can</Link>
                                                <p className="ps-product__meta"> <span className="ps-product__price">$12.99</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-inner__right">
                            <button className="button-icon icon-md"><i className="icon-repeat"></i></button><Link className="button-icon icon-md" to="wishlist.html"><i className="icon-heart"></i><span className="badge bg-warning">2</span></Link>
                            <div className="button-icon btn-cart-header"><i className="icon-cart icon-shop5"></i><span className="badge bg-warning">3</span>
                                <div className="mini-cart">
                                    <div className="mini-cart--content">
                                        <div className="mini-cart--overlay"></div>
                                        <div className="mini-cart--slidebar cart--box">
                                            <div className="mini-cart__header">
                                                <div className="cart-header-title">
                                                    <h5>Shopping Cart(3)</h5><Link className="close-cart" to="/"><i className="icon-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="mini-cart__products">
                                                <div className="out-box-cart">
                                                    <div className="triangle-box">
                                                        <div className="triangle"></div>
                                                    </div>
                                                </div>
                                                <ul className="list-cart">
                                                    <li className="cart-item">
                                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></Link>
                                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Extreme Budweiser Light Can</Link>
                                                                <p className="ps-product__unit">500g</p>
                                                                <p className="ps-product__meta"> <span className="ps-product__price">$3.90</span><span className="ps-product__quantity">(x1)</span>
                                                                </p>
                                                            </div>
                                                            <div className="ps-product__remove"><i className="icon-trash2"></i></div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_31a.jpg" alt="alt" /></Link>
                                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Honest Organic Still Lemonade</Link>
                                                                <p className="ps-product__unit">100g</p>
                                                                <p className="ps-product__meta"> <span className="ps-product__price-sale">$5.99</span><span className="ps-product__is-sale">$8.99</span><span className="quantity">(x1)</span>
                                                                </p>
                                                            </div>
                                                            <div className="ps-product__remove"><i className="icon-trash2"></i></div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></Link>
                                                            <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Matures Own 100% Wheat</Link>
                                                                <p className="ps-product__unit">1.5L</p>
                                                                <p className="ps-product__meta"> <span className="ps-product__price">$12.90</span><span className="ps-product__quantity">(x1)</span>
                                                                </p>
                                                            </div>
                                                            <div className="ps-product__remove"><i className="icon-trash2"></i></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mini-cart__footer row">
                                                <div className="col-6 title">TOTAL</div>
                                                <div className="col-6 text-right total">$29.98</div>
                                                <div className="col-12 d-flex"><Link className="view-cart" to="shopping-cart.html">View cart</Link><Link className="checkout" to="checkout.html">Checkout</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navigation">
                <div className="container">
                    <ul className="menu">
                        <li className="menu-item-has-children has-mega-menu active"><Link className="nav-link active" to="/">Home</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <div className="mega-menu">
                                <div className="mega-anchor"></div>
                                <div className="mega-menu__column">
                                    <h4>Home Pages<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li className="active"><Link className="active" to="index.html">Home Supermarket</Link></li>
                                        <li><Link to="home-full-width.html">Home Supermarket Full Width</Link></li>
                                        <li><Link to="home-local-store.html">Home Local Store</Link></li>
                                        <li><Link to="home-sidebar.html">Home Sidebar</Link></li>
                                        <li><Link to="home-business.html">Home Business</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><Link className="nav-link" to="/">Shop</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <div className="mega-menu mega-shop">
                                <div className="mega-anchor"></div>
                                <div className="mega-menu__column">
                                    <h4>Shop Pages<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="shop-view-grid.html">Shop Default View Grid</Link></li>
                                        <li><Link to="shop-view-listing.html">Shop Default View Listing</Link></li>
                                        <li><Link to="shop-view-extended.html">Shop Default View Products</Link></li>
                                        <li><Link to="shop-categories.html">Shop Categories</Link></li>
                                        <li><Link to="shop-with-banner.html">Shop With Banner</Link></li>
                                        <li><Link to="shop-all-brands.html">Shop All Brands</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Product Layouts<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="product-default.html">Shop Default</Link></li>
                                        <li><Link to="product-extended.html">Shop Extended</Link></li>
                                        <li><Link to="product-sidebar.html">Shop Sidebar</Link></li>
                                        <li><Link to="product-full-width.html">Shop Full Width</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Product Types<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="product-simple.html">Simple</Link></li>
                                        <li><Link to="product-variable.html">Variable</Link></li>
                                        <li><Link to="product-attribute.html">Attribute (Size)</Link></li>
                                        <li><Link to="product-image-swatches.html">Images Swatches</Link></li>
                                        <li><Link to="product-on-sale.html">On Sale</Link></li>
                                        <li><Link to="product-out-of-stock.html">Out of Stock</Link></li>
                                        <li><Link to="product-groupped.html">Groupped</Link></li>
                                        <li><Link to="product-countdown-timer.html">Countdown Timer</Link></li>
                                        <li><Link to="product-coupon-code.html">Coupon Code</Link></li>
                                        <li><Link to="product-price-list-compare.html">Price List Compare</Link></li>
                                        <li><Link to="product-instagram-feed.html">Instagram Feed</Link></li>
                                        <li><Link to="product-video-featured.html">Video Featured</Link></li>
                                        <li><Link to="product-with-button-buy-now.html">With button Buy Now</Link></li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Woo Pages<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="shopping-cart.html">Shopping Cart</Link></li>
                                        <li><Link to="checkout.html">Checkout</Link></li>
                                        <li><Link to="wishlist.html">Wishlist</Link></li>
                                        <li><Link to="index.html">Compare</Link></li>
                                        <li><Link to="order-tracking.html">Order Tracking</Link></li>
                                        <li><Link to="login-register.html">Login & Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><Link className="nav-link" to="/">Pages</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <div className="mega-menu">
                                <div className="mega-anchor"></div>
                                <div className="mega-menu__column">
                                    <h4>Page all<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="vendor-registration.html">Vendor Register</Link></li>
                                        <li><Link to="become-a-vendor.html">Become a Vendor</Link></li>
                                        <li><Link to="store-list.html">Dokan Store List</Link></li>
                                        <li><Link to="vendor-store.html">Dokan Vendor Store</Link></li>
                                        <li><Link to="flash-sale.html">Flash Sale</Link></li>
                                        <li><Link to="about-us.html">About Us</Link></li>
                                        <li><Link to="contact.html">Contact</Link></li>
                                        <li><Link to="faq.html">FAQs</Link></li>
                                        <li><Link to="404-not-found.html">404 Not Found</Link></li>
                                        <li><Link to="coming-soon.html">Coming Soon</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><Link className="nav-link" to="/">Blog</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <div className="mega-menu">
                                <div className="mega-anchor"></div>
                                <div className="mega-menu__column">
                                    <h4>Blog Type<span className="sub-toggle"></span></h4>
                                    <ul className="sub-menu--mega">
                                        <li><Link to="blog-default.html">01 Blog-Default</Link></li>
                                        <li><Link to="blog-thumbnail.html">Blog Small Thumbnail</Link></li>
                                        <li><Link to="blog-gird.html">Blog Gird</Link></li>
                                        <li><Link to="blog-list.html">Blog Listing</Link></li>
                                        <li><Link to="single-post.html">Single Post without Sidebar</Link></li>
                                        <li><Link to="single-post-sidebar.html">Single Post with Sidebar</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu menu-item-branch"><Link className="nav-link" to="/">Brand</Link>
                            <div className="mega-menu mega-brand">
                                <div className="mega-anchor"></div>
                                <div className="brand-box">
                                    <div className="brand__title">FEATURED BRAND</div>
                                    <div className="row">
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_themeforest.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_envato.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_codecanyon.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_cudicjungle.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_videohive.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_photodune.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_evatotuts.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/brand_3docean.jpg" alt="alt" /></Link></div>
                                        <div className="col-4"><Link to="shop-view-grid.html"><img src="img/brand/microlancer.jpg" alt="alt" /></Link></div>
                                    </div><Link className="brand__link" to="shop-all-brands.html">See all brands<i className="icon-chevron-right"></i></Link>
                                </div>
                                <div className="brand__promotion"><Link to="flash-sale.html"><img src="img/brand/brand_01.jpg" alt="alt" /></Link></div>
                                <div className="brand__promotion"><Link to="flash-sale.html"><img src="img/brand/brand_02.jpg" alt="alt" /></Link></div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><Link className="nav-link" to="flash-sale.html">Flash Sale</Link></li>
                    </ul>
                    <div className="navigation-text">
                        <ul className="menu">
                            <li className="menu-item-has-children has-mega-menu"><Link className="nav-link" to="/">Your Recent Viewed</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                                <div className="mega-menu recent-view">
                                    <div className="mega-anchor"></div>
                                    <div className="container">
                                        <div className="slick-many-item"><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_1a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_2a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_30a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_10a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_28b.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_31a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_15a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_5a.jpg" alt="alt" /></Link><Link className="recent-item" to="index.html"><img src="img/products/01-Fresh/01_32a.jpg" alt="alt" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mobile-search--slidebar">
                <div className="mobile-search--content">
                    <div className="mobile-search__header">
                        <div className="mobile-search-box">
                            <div className="input-group">
                                <input className="form-control" placeholder="I'm shopping for..." id="inputSearchMobile" />
                                <div className="input-group-append">
                                    <button className="btn"> <i className="icon-magnifier"></i></button>
                                </div>
                            </div>
                            <button className="cancel-search"><i className="icon-cross"></i></button>
                        </div>
                    </div>
                    <div className="mobile-search__trendding">
                        <h5> <i className="icon-power"></i>Trending search</h5>
                        <div className="trending-content">
                            <ul className="mobile-list-trending">
                                <li className="title"><Link>Trending search: </Link></li>
                                <li className="trending-item"><Link to="/">meat</Link></li>
                                <li className="trending-item"><Link to="/">fruit</Link></li>
                                <li className="trending-item"><Link to="/">vegetables</Link></li>
                                <li className="trending-item"><Link to="/">salad</Link></li>
                                <li className="trending-item"><Link to="/">yoghurts</Link></li>
                                <li className="trending-item"><Link to="/">apple</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-search__history">
                        <h5> <i className="icon-history2"></i>History<Link to="/">Clear all</Link></h5>
                        <div className="history-content">
                            <ul className="history-list">
                                <li className="history-item"><Link className="history-link" to="/"> <span>apple</span><i className="icon-cross2"></i></Link></li>
                                <li className="history-item"><Link className="history-link" to="/"> <span>organic fruit</span><i className="icon-cross2"></i></Link></li>
                                <li className="history-item"><Link className="history-link" to="/"> <span>meat beef</span><i className="icon-cross2"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-search__result">
                        <h5> <span className="number-result">5</span>search result</h5>
                        <ul className="list-result">
                            <li className="cart-item">
                                <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></Link>
                                    <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html"><u>Organic</u> Large Green Bell Pepper</Link>
                                        <p className="ps-product__rating">
                                            <select className="rating-stars">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3" selected="selected">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select><span>(5)</span>
                                        </p>
                                        <p className="ps-product__meta"> <span className="ps-product__price">$6.90</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></Link>
                                    <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Avocado <u>Organic</u> Hass Large</Link>
                                        <p className="ps-product__meta"> <span className="ps-product__price">$12.90</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_32a.jpg" alt="alt" /></Link>
                                    <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Tailgater Ham <u>Organic</u> Sandwich</Link>
                                        <p className="ps-product__meta"> <span className="ps-product__price">$33.49</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_6a.jpg" alt="alt" /></Link>
                                    <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Extreme <u>Organic</u> Light Can</Link>
                                        <p className="ps-product__rating">
                                            <select className="rating-stars">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4" selected="selected">4</option>
                                                <option value="5">5</option>
                                            </select><span>(16)</span>
                                        </p>
                                        <p className="ps-product__meta"> <span className="ps-product__price-sale">$4.99</span><span className="ps-product__is-sale">$8.99</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="ps-product--mini-cart"><Link to="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_22a.jpg" alt="alt" /></Link>
                                    <div className="ps-product__content"><Link className="ps-product__name" to="product-default.html">Extreme <u>Organic</u> Light Can</Link>
                                        <p className="ps-product__meta"> <span className="ps-product__price">$12.99</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser : null
}





export default Header;
