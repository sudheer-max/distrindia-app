import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';


const Footer = () => {



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
            <MobileNav />

        </>
    )
}

export default Footer
