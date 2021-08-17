import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="ps-footer">
                <div className="container">
                    <div className="ps-footer--contact">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <p className="contact__title">Contact Us</p>
                                <p><b><i className="icon-telephone"> </i>Hotline: </b><span>(7:00 - 21:30)</span></p>
                                <p className="telephone">097 978-6290<br />097 343-8888</p>
                                <p> <b>Head office: </b>8049 High Ridge St. Saint Joseph, MI 49085</p>
                                <p> <b>Email us: </b><Link to="http://nouthemes.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="60131510100f1214200601120d0112144e030f0d">[email&#160;protected]</Link></p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <p className="contact__title">Help & Info<span className="footer-toggle"><i className="icon-chevron-down"></i></span></p>
                                        <ul className="footer-list">
                                            <li><Link to="/">About Us</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                            <li><Link to="/">Sore Locations</Link></li>
                                            <li><Link to="/">Terms of Use</Link></li>
                                            <li><Link to="/">Policy</Link></li>
                                            <li><Link to="/">Flash Sale</Link></li>
                                            <li><Link to="/">FAQs</Link></li>
                                        </ul>
                                        <hr />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <p className="contact__title">Corporate<span className="footer-toggle"><i className="icon-chevron-down"></i></span></p>
                                        <ul className="footer-list">
                                            <li><Link to="/">Become a Vendor</Link></li>
                                            <li><Link to="/">Affiliate Program</Link></li>
                                            <li><Link to="/">Farm Business</Link></li>
                                            <li><Link to="/">Careers</Link></li>
                                            <li><Link to="/">Our Suppliers</Link></li>
                                            <li><Link to="/">Accessibility</Link></li>
                                        </ul>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <p className="contact__title">Newsletter Subscription</p>
                                <p>Join our email subscription now to get updates on <b>promotions </b>and <b>coupons.</b></p>
                                <div className="input-group">
                                    <div className="input-group-prepend"><i className="icon-envelope"></i></div>
                                    <input className="form-control" type="text" placeholder="Enter your email..." />
                                    <div className="input-group-append">
                                        <button className="btn">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-footer--service">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="service__payment"><img src="img/promotion/payment_paypal.jpg" alt="distrindia" /><img src="img/promotion/payment_visa.jpg" alt="distrindia" /><img src="img/promotion/payment_mastercart.jpg" alt="distrindia" /><img src="img/promotion/payment_electron.jpg" alt="distrindia" /><img src="img/promotion/payment_skrill.jpg" alt="distrindia" /></div>
                                <p className="service__app">Get Farmart App to <span className="text-success">get $15 coupon</span></p>
                                <div className="service__download"><Link to="contact.html"><img src="img/promotion/appStore.jpg" alt="distrindia" /></Link><Link to="contact.html"><img src="img/promotion/googlePlay.jpg" alt="distrindia" /></Link></div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <table className="table table-bordered">
                                    <tr>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_01.jpg" alt="distrindia" /></Link></td>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_02.jpg" alt="distrindia" /></Link></td>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_03.jpg" alt="distrindia" /></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_04.jpg" alt="distrindia" /></Link></td>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_05.jpg" alt="distrindia" /></Link></td>
                                        <td><Link to="contact.html"><img src="img/promotion/badges_06.jpg" alt="distrindia" /></Link></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="service--block">
                                    <p className="service__item"> <i className="icon-speed-fast"></i><span> <b>Fast Delivery </b>& Shipping</span></p>
                                    <p className="service__item"> <i className="icon-color-sampler"></i><span>Top <b>Offers</b></span></p>
                                    <p className="service__item"> <i className="icon-wallet"></i><span>Money <b>Cashback</b></span></p>
                                    <p className="service__item"> <i className="icon-bubble-user"></i><span>Friendly <b>Support 24/7</b></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-footer--categories">
                        <div className="categories__list"><b>Fresh: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Meat & Poultry</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Fruit</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Vegetables</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Salad & Herbs</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Yoghurts</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Milk, Butter & Eggs</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Ham, Deli & Dips</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Cheese</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Fish</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Pizza & Garlic Bread</Link></li>
                            </ul>
                        </div>
                        <div className="categories__list"><b>Food Cupboard: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Crisps, Snacks & Nuts</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Breakfast Cereals</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Tins & Cans</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Chocolate & Sweets</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Biscuits</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Rice, Pasta & Pulses</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Cooking Ingredients</Link></li>
                            </ul>
                        </div>
                        <div className="categories__list"><b>Bakery: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Bread</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Rolls, Bagels & Thins</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Cakes & Treats</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Wraps, Pitta & Naan Bread</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Crumpets, Muffins & Pancakes</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Croissants & Brioche</Link></li>
                            </ul>
                        </div>
                        <div className="categories__list"><b>Frozen Foods: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Ice Cream</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Fruit, Vegetables & Herbs</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Chips, Potatoes & Rice</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Fish</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Vegetarian</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Meat & Poultry</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Ready Meals & Party Food</Link></li>
                            </ul>
                        </div>
                        <div className="categories__list"><b>Ready Meals: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Meals for 1</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Indian</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Italian</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Chinese</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Traditional British</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Thai & Oriental</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Mediterranean & Moroccan</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Mexican & Caribbean</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Kids' Meals</Link></li>
                            </ul>
                        </div>
                        <div className="categories__list"><b>Soft Drinks, Tea & Coffee: </b>
                            <ul className="menu--vertical">
                                <li className="menu-item"><Link to="shop-categories.html">Fizzy Drinks</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Water</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Tea, Coffee & Hot Drinks</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Squash</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Juices</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Mixers</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Diet & No Added Sugar</Link></li>
                                <li className="menu-item"><Link to="shop-categories.html">Still & Sparkling</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ps-footer__copyright">
                        <div className="col-12 col-lg-6 ps-footer__text">&copy; 2020 Farmart Marhetplace. All Rights Reversed.</div>
                        <div className="col-12 col-lg-6 ps-footer__social"> <Link className="icon_social facebook" to="/"><i className="fa fa-facebook-f"></i></Link><Link className="icon_social twitter" to="/"><i className="fa fa-twitter"></i></Link><Link className="icon_social google" to="/"><i className="fa fa-google-plus"></i></Link><Link className="icon_social youtube" to="/"><i className="fa fa-youtube"></i></Link><Link className="icon_social wifi" to="/"><i className="fa fa-wifi"></i></Link></div>
                    </div>
                </div>
            </footer>
            <div className="ps-footer-mobile">
                <div className="menu__content">
                    <ul className="menu--footer">
                        <li className="nav-item"><Link className="nav-link" to="index.html"><i className="icon-home3"></i><span>Home</span></Link></li>
                        <li className="nav-item"><Link className="nav-link footer-category" to="/"><i className="icon-list"></i><span>Category</span></Link></li>
                        <li className="nav-item"><Link className="nav-link footer-cart" to="shopping-cart.html"><i className="icon-cart"></i><span className="badge bg-warning">3</span><span>Cart</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="wishlist.html"><i className="icon-heart"></i><span>Wishlist</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="login-register.html"><i className="icon-user"></i><span>Account</span></Link></li>
                    </ul>
                </div>
            </div>
            <button className="btn scroll-top"><i className="icon-chevron-up"></i></button>
            <div className="ps-preloader" id="preloader">
                <div className="ps-preloader-section ps-preloader-left"></div>
                <div className="ps-preloader-section ps-preloader-right"></div>
            </div>
            <div className="ps-category--mobile">
                <div className="category__header">
                    <div className="category__title">All Departments</div><span className="category__close"><i className="icon-cross"></i></span>
                </div>
                <div className="category__content">
                    <ul className="menu--mobile">
                        <li className="daily-deals category-item"><Link to="flash-sale.html">Daily Deals</Link></li>
                        <li className="category-item"><Link to="shop-categories.html">Top Promotions</Link></li>
                        <li className="category-item"><Link to="shop-categories.html">New Arrivals</Link></li>
                        <li className="menu-item-has-children category-item"><Link to="shop-categories.html">Fresh</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="shop-view-grid.html">Meat & Poultry</Link></li>
                                <li><Link to="shop-view-grid.html">Fruit</Link></li>
                                <li><Link to="shop-view-grid.html">Vegetables</Link></li>
                                <li><Link to="shop-view-grid.html">Milks, Butter & Eggs</Link></li>
                                <li><Link to="shop-view-grid.html">Fish</Link></li>
                                <li><Link to="shop-view-grid.html">Frozen</Link></li>
                                <li><Link to="shop-view-grid.html">Cheese</Link></li>
                                <li><Link to="shop-view-grid.html">Pasta & Sauce</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children category-item"><Link to="shop-categories.html">Food Cupboard</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="shop-view-grid.html">Crisps, Snacks & Nuts</Link></li>
                                <li><Link to="shop-view-grid.html">Breakfast Cereals</Link></li>
                                <li><Link to="shop-view-grid.html">Tins & Cans</Link></li>
                                <li><Link to="shop-view-grid.html">Chocolate & Sweets</Link></li>
                            </ul>
                        </li>
                        <li className="category-item"><Link to="shop-categories.html">Bakery</Link></li>
                        <li className="category-item"><Link to="shop-categories.html">Frozen Foods</Link></li>
                        <li className="menu-item-has-children category-item"><Link to="shop-categories.html">Ready Meals</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="shop-view-grid.html">Traditional British</Link></li>
                                <li><Link to="shop-view-grid.html">Indian</Link></li>
                                <li><Link to="shop-view-grid.html">Italian</Link></li>
                                <li><Link to="shop-view-grid.html">Chinese</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children category-item"><Link to="shop-categories.html">Drinks, Tea &amp; Coffee</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="shop-view-grid.html">Tea & Coffee</Link></li>
                                <li><Link to="shop-view-grid.html">Hot Drinks</Link></li>
                                <li><Link to="shop-view-grid.html">Fizzy Drinks</Link></li>
                                <li><Link to="shop-view-grid.html">Water</Link></li>
                            </ul>
                        </li>
                        <li className="category-item"><Link to="shop-categories.html">Beer, Wine & Spirits</Link></li>
                        <li className="category-item"><Link to="shop-categories.html">Baby & Child</Link></li>
                        <li className="category-item"><Link to="shop-categories.html">Kitchen & Dining</Link></li>
                    </ul>
                </div>
            </div>
            <nav className="navigation--mobile">
                <div className="navigation__header">
                    <div className="navigation__select">
                        <div className="languages"><Link className="nav-top-link" to="/"> <span className="current-languages">English</span><i className="icon-chevron-down"></i></Link>
                            <div className="select--dropdown">
                                <ul className="select-languages">
                                    <li className="active language-item" data-value="English"><Link to="/">English</Link></li>
                                    <li className="language-item" data-value="Brunei"><Link to="/">Brunei</Link></li>
                                    <li className="language-item" data-value="Armenia"><Link to="/">Armenia</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="currency"><Link className="nav-top-link" to="/"> <span className="current-currency">USD</span><i className="icon-chevron-down"></i></Link>
                            <div className="select--dropdown">
                                <ul className="select-currency">
                                    <li className="active currency-item" data-value="USD"><Link to="/">USD</Link></li>
                                    <li className="currency-item" data-value="VND"><Link to="/">VND</Link></li>
                                    <li className="currency-item" data-value="EUR"><Link to="/">EUR</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-title">
                        <button className="close-navbar-slide"><i className="icon-arrow-left"></i></button>
                        <div><span> <i className="icon-user"></i>Hi, </span><span className="account">Morgan Averill</span><Link className="dropdown-user" to="/" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-chevron-down"></i></Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownAccount"><Link className="dropdown-item" to="/"><b>My Account</b></Link><Link className="dropdown-item" to="/">Dashboard</Link><Link className="dropdown-item" to="/">Account Setting</Link><Link className="dropdown-item" to="shopping-cart.html">Orders</Link><Link className="dropdown-item" to="wishlist.html">Wishlist</Link><Link className="dropdown-item" to="/">Shipping Address</Link><Link className="dropdown-divider"></Link><Link className="dropdown-item" to="/"><b>Vendor Setting</b></Link><Link className="dropdown-item" to="/">Dashboard</Link><Link className="dropdown-item" to="/">Products</Link><Link className="dropdown-item" to="shopping-cart.html">Orders</Link><Link className="dropdown-item" to="/">Settings</Link><Link className="dropdown-item" to="vendor-store.html">View Store</Link><Link className="dropdown-divider"></Link><Link className="dropdown-item" to="/"><i className="icon-exit-left"></i>Log out</Link></div>
                        </div>
                    </div>
                </div>
                <div className="navigation__content">
                    <ul className="menu--mobile">
                        <li className="menu-item-has-children"><Link to="/">Home</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="index.html">Home Supermarket</Link></li>
                                <li><Link to="home-full-width.html">Home Supermarket Full Width</Link></li>
                                <li><Link to="home-local-store.html">Home Local Store</Link></li>
                                <li><Link to="home-sidebar.html">Home Sidebar</Link></li>
                                <li><Link to="home-business.html">Home Business</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><Link to="/">Shop</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="shop-view-grid.html">Shop Default View Grid</Link></li>
                                <li><Link to="shop-view-listing.html">Shop Default View Listing</Link></li>
                                <li><Link to="shop-view-extended.html">Shop Default View Products</Link></li>
                                <li><Link to="shop-categories.html">Shop Categories</Link></li>
                                <li><Link to="shop-with-banner.html">Shop With Banner</Link></li>
                                <li><Link to="shop-all-brands.html">Shop All Brands</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><Link to="/">Pages</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
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
                        </li>
                        <li className="menu-item-has-children"><Link to="/">Blog</Link><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                            <ul className="sub-menu">
                                <li><Link to="blog-default.html">01 Blog-Default</Link></li>
                                <li><Link to="blog-thumbnail.html">Blog Small Thumbnail</Link></li>
                                <li><Link to="blog-gird.html">Blog Gird</Link></li>
                                <li><Link to="blog-list.html">Blog Listing</Link></li>
                                <li><Link to="single-post.html">Single Post without Sidebar</Link></li>
                                <li><Link to="single-post-sidebar.html">Single Post with Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><Link to="product-default.html">Brand</Link></li>
                        <li className="menu-item-has-children"><Link to="flash-sale.html">Flash Sale</Link></li>
                    </ul>
                    <ul className="menu--mobile">
                        <li className="daily-deals"><Link>daily deals</Link></li>
                    </ul>
                </div>
                <div className="navigation__footer">
                    <ul className="menu--icon">
                        <li className="footer-item"><Link className="footer-link" to="/"><i className="icon-history2"></i><span>Recent viewed product</span></Link></li>
                        <li className="footer-item"><Link className="footer-link" to="/"><i className="icon-cube"></i><span>Become a vendor</span></Link></li>
                        <li className="footer-item"><Link className="footer-link" to="/"><i className="icon-question-circle"></i><span>Help & Contact</span></Link></li>
                        <li className="footer-item"><Link className="footer-link" to="/"><i className="icon-telephone"></i><span>HOTLINE: <span className='text-success'>(+1) 970 978-6290</span> (Free)</span></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Footer
