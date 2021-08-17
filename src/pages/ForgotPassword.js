import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart, resetUserState } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    registerError: user.registerError
});

const ForgotPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { registerError, resetPasswordSuccess } = useSelector(mapState);
   
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState());
            history.push('/login');
        }
    }, [resetPasswordSuccess]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));

    }

    return (
        <main className="no-main">
            <div className="ps-breadcrumb">
                <div className="container">
                    <ul className="ps-breadcrumb__list">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/">Order Tracking</Link></li>
                    </ul>
                </div>
            </div>
            <section className="section--order-tracking">
                <div className="container">
                    <h2 className="page__title">Forgot Password</h2>
                    <div className="order-tracking__content">
                            <div className="order-tracking__form">
                                {errors.length > 0 && (
                                        <div>
                                            {errors.map((err, index) => {
                                                return (
                                                    <span className="invalid-feedback" key={index}>{ err }</span>
                                                )
                                            })}
                                </div>
                            )}        
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-row">
                                    <div className="col-12">
                                        <p>To track your order please anter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have receied.</p>
                                    </div>
                                    <div className="col-12 form-group--block">
                                        <label>Email </label>
                                        <input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your register email"/>
                                    </div>
                                    
                                    <div className="col-12 form-group--block">
                                        <button className="btn ps-button" type="submit">Reset Password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default ForgotPassword;