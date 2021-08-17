import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <main className="no-main">
        <section className="section--coming">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="comming__content">
                        <div className="container__coming">
                            <h2 className="logo">Farm<span>art </span></h2>
                            <div className="comming__box">
                                <h2 className="comming__title">We're coming soon.</h2>
                                <p>Currently we're working on our brand new webstie and will be lauching soon. Subscribe below to keep updated.</p>
                                <div className="comming__countdown">
                                    <div className="countdown__block"><span className="time days">00<span className="subtime">days</span></span><span className="connect">: </span><span className="time hours">13<span className="subtime">hours</span></span><span className="connect">: </span><span className="time minutes">47<span className="subtime">mins</span></span><span className="connect">: </span><span className="time seconds">58<span className="subtime">secs</span></span></div>
                                </div>
                                <div className="comming__form">
                                    <p>GET NOTTIFIED ABOUT LAUNCHING</p>
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Enter your email address..."/>
                                        <div className="input-group-append">
                                            <button className="btn ps-button">Notify Me</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comming__footer">
                                <p>Follow social network</p><Link className="icon_social facebook" to="/"><i className="fa fa-facebook-f"></i></Link><Link className="icon_social twitter" to="/"><i className="fa fa-twitter"></i></Link><Link className="icon_social google" to="/"><i className="fa fa-google-plus"></i></Link><Link className="icon_social youtube" to="/"><i className="fa fa-youtube"></i></Link><Link className="icon_social wifi" to="/"><i className="fa fa-wifi"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6"><img src="img/pages/coming-soon.jpg" alt="distrindia" /></div>
            </div>
        </section>
    </main>
    )
}

export default Home
