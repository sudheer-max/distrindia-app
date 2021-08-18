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
        <main className="no-main" style={{ backgroundColor: 'white' }}>
            <div class="col-11 col-md-10 mx-auto" style={{ width: '450px', padding: '15px' }}>
                <h3 class="text-center mt-3 mb-4">Forgot
                    your password?</h3>
                <p class="text-center text-3
                    text-muted">Enter your Email or
                    Mobile and we’ll help you reset
                    your password.</p>
                <form id="forgotForm"
                    class="form-border"
                    method="post">
                    <div class="form-group">
                        <input type="text"
                            class="form-control
                            border-2"
                            id="emailAddress"
                            required
                            placeholder="Enter Email
                            or Mobile Number"/>
                    </div>
                    <button class="btn btn-primary
                        btn-block my-4"
                        type="submit">Continue</button>
                </form>
                <p class="text-center mb-0"><a
                    class="btn-link" href=""
                    data-toggle="modal"
                    data-target="#login-modal"
                    data-dismiss="modal">Return
                    to Log In</a> <span
                        class="text-muted mx-3">|</span>
                    <a class="btn-link" href=""
                        data-toggle="modal"
                        data-target="#otp-modal"
                        data-dismiss="modal">Request
                        OTP</a></p>
            </div>
        </main>
    )

}

export default ForgotPassword;