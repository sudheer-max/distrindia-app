import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registerUserStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    registerError: user.registerError
});

const Register = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { currentUser, registerError } = useSelector(mapState);


    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cname, setCname] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (currentUser) {
            formReset();
            history.push('/');
        }
    }, [currentUser]);

    const formReset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCname("");
        setAddress("");
        setMobile("");
        setErrors([]);
    }


    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserStart({
            displayName, cname, address, mobile, email, password, confirmPassword
        }));
    }
    return (
        <main className="no-main">
    <div className="ps-breadcrumb">
        <div className="container">
            <ul className="ps-breadcrumb__list">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to=" ">My Account</Link></li>
            </ul>
        </div>
    </div>
    <section className="section--registration">
        <div className="container">
            <h2 className="page__title">Registration</h2>
            <p className="page__subtitle">Get started by just filling out one simple form</p>
                <div className="registration__content">
                <form onSubmit={handleFormSubmit}>    
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="registration__info">
                            <h3 className="registration__title">Account Information</h3>
                                        <div className="form-row">
                                            {errors.length > 0 && (
                                                <div>
                                                    {errors.map((err, index) => {
                                                        return (
                                                            <span className="invalid-feedback" key={index}>{err}</span>
                                                        )
                                                    })}    
                                                </div>
                                            )}
                                    <div className="col-12 form-group--block">
                                        <label>Full name: <span>*</span></label>
                                                <input className="form-control" type="text" name="displayName" required value={displayName} onChange={ (e) => setDisplayName(e.target.value)}/>
                                    </div>
                                    
                                    <div className="col-12 form-group--block">
                                        <label>Email: <span>*</span></label>
                                                <input className="form-control" type="eamil" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12 form-group--block">
                                        <label>Password: <span>*</span></label>
                                        <input className="form-control" type="password" required name="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-12 form-group--block">
                                        <label>Retype password: <span>*</span></label>
                                        <input className="form-control" type="password" required name="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <h3 className="registration__title">Company Information</h3>
                        <div className="registration__box">
                                <div className="form-row">
                                    <div className="col-12 form-group--block">
                                        <label>Company name: <span>*</span></label>
                                                <input className="form-control" type="text" name="cname" value={ cname } onChange={ (e) => setCname(e.target.value)}/>
                                    </div>
                                    
                                    
                                    <div className="col-12 form-group--block">
                                        <label>address: </label>
                                        <input className="form-control" type="text" name="address" value={address} onChange={ (e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="col-12 form-group--block">
                                        <label>Phone number: <span>*</span></label>
                                            <input className="form-control" type="text" name="mobile" value={ mobile } onChange={ (e) => setMobile(e.target.value)}/>
                                    </div>
                                    
                                </div>
                        </div>
                        <p>By creating an account, you agree to Distrindia <span className="text-success">Conditions of Use </span>and <span className="text-success">Privacy Notice.</span></p>
                        <button className="btn ps-button" type="submit" >Register</button>
                    </div>
                    
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
    )
}

export default Register;