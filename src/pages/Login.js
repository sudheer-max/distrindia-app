import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import Google from '../components/Google';
import { emailLoginStart, googleLoginStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser : user.currentUser 
});

const Login = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleSignIn = () => {
        dispatch(googleLoginStart());
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(emailLoginStart({ email, password }));

    }
    

    return (
        <main className="no-main">
        <div className="ps-breadcrumb">
            <div className="container">
                <ul className="ps-breadcrumb__list">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/">My Account</Link></li>
                </ul>
            </div>
        </div>
        <section className="section--login">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="login__box">
                            <div className="login__header">
                                <h3 className="login__login">LOGIN</h3>
                                <h3 className="login__register">REGISTER</h3>
                            </div>
                            <div className="login__content">
                                <form onSubmit={handleSubmit}>
                                    <div className="login__label">Login to your account.</div>
                                    <div className="input-group">
                                        <input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username/ Email" />
                                    </div>
                                    <div className="input-group group-password">
                                        <input className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        
                                    </div>
                                    <Link to="/forgot-password" style={{alignContent:"right"}}>Forgot Password</Link>
                                    <button className="btn btn-login" type="submit">Login</button>
                                        
                                    <div className="login__conect">
                                        <hr/>
                                        <p>Or login with</p>
                                        <hr/>
                                    </div>
                                    <button className="btn btn-social btn-facebook"> <i className="fa fa-facebook-f"></i>Login with Facebook</button>
                                    {/* there is buttons google buttons */}
                                    <Google onClick={ handleGoogleSignIn }><i className="fa fa-google-plus"></i>Login with Google</Google>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h3 className="login__title">Advantages Of Becoming A Member</h3>
                        <p className="login__description"> <b>Distrindia Pvt. Ltd. </b>has you covered from click to delivery.<br/>Sign up or sign in and you will be able to: </p>
                        <div className="login__orther">
                            <p> <i className="icon-truck"></i>Easily Track Orders, Hassle free Returns</p>
                            <p> <i className="icon-alarm2"></i>Get Relevant Alerts and Recommendation</p>
                            <p><i className="icon-star"></i>Wishlist, Reviews, Ratings and more.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}


export default Login;
