import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart } from '../redux/User/user.actions';

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
            history.push('/login');
        }
    }, [resetPasswordSuccess, history]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));

    }

    return (

        <main className="no-main">
            <div className="ps-breadcrumb">
                <div className="container">
                    <ul
                        className="ps-breadcrumb__list">
                        <li className="active"><Link
                            to="/">Home</Link></li>
                        <li><Link
                            to="/">Reset Password</Link></li>
                    </ul>
                </div>
            </div>
            <section
                className="section--order-tracking">
                <div className="container">
                    <h2 className="page__title">Reset Password</h2>
                    <div
                        className="order-tracking__content">
                        {errors.length > 0 && (
                            <>
                                {errors.map((err, index) => {
                                    return (
                                        <div className="invalid-feedback" key={index}>{err}</div>
                                    )
                                })}
                            </>
                        )}

                        <div
                            className="order-tracking__form">
                            <form onSubmit={handleFormSubmit}>
                                <div
                                    className="form-row">
                                    <div
                                        className="col-12">
                                        <p>Enter your Email or Mobile and we’ll help you reset
                                            your password..</p>
                                    </div>
                                    <div
                                        className="col-12
                                            form-group--block">
                                        <label>Your registered Email address:
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter your registered email address" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>

                                    <div
                                        className="col-12
                                form-group--block">
                                        <button
                                            className="btn
                                    ps-button" type="submit" >Reset Password</button>
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