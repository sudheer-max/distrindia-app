import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';

toast.configure();

const Contact = () => {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (toSend.name === "" || toSend.email === "" || toSend.message === "") {
            toast.error('All field is required')
        } else {
            send('service_ecofib9', 'template_swn333e', toSend, 'user_rOAP0DwsCzQO1LbpI5tyY')
                .then((response) => {
                    if (response) {
                        toast.success('Your message has been sent successfully!');
                    }
                }).catch((err) => {
                    if (err) {
                        toast.error(err.message);
                    }
                })
        }

    }
    return (
        <main className="no-main">
            <div className="ps-breadcrumb">
                <div className="container">
                    <ul className="ps-breadcrumb__list">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <section className="section--contact ps-page--business">
                <div className="container">
                    <h2 className="page__title">Contact Us</h2>
                    <div className="contact__content">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="row">

                                    <div className="col-12 col-md-6">
                                        <h3 className="contact__title">Contact Info</h3>
                                        <div className="contact__info">
                                            <p> <span>Hotline Free: </span>(7:00 - 21:30)</p>
                                            <p className="contact__info__phone">84228-27990</p>
                                            <p className="contact__info__phone">+33 6 76 67 57 26</p>
                                            <p> <span>Head office: </span>PLOT NO E-71, ADDITIONAL MIDC, PATALGANGA, TAL- PANVEL, DIST - RAIGAD PANVEL RAIGARH MH 410207 IN</p>
                                            <p> <span>Email us: </span>welcome@distrindia.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="contact__form">
                                        <h3 className="contact__title">Contact Form</h3>
                                        <p>please send us a message by filling out the form below and we will get back with you shortly.</p>
                                        <div className="form-row">
                                            <div className="col-12 form-group--block">
                                                <label>Name: <span>*</span></label>
                                                <input className="form-control" type="text" name="name" value={toSend.name} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 form-group--block">
                                                <label>Email: <span>*</span></label>
                                                <input className="form-control" type="email" name="email" value={toSend.email} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 form-group--block">
                                                <label>Subject (optional): </label>
                                                <input className="form-control" type="text" name="subject" value={toSend.subject} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 form-group--block">
                                                <label>Message: <span>*</span></label>
                                                <textarea className="form-control" name="message" value={toSend.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn ps-button contact__send" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
