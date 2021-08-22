import React from 'react';
import { CheckUserIsAdmin } from '../utils';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminLink = () => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = CheckUserIsAdmin(currentUser);
    if (!isAdmin) return null;
    return (
        <div
            className="top-bar__left">
            <ul className="nav-top">
                <li className="nav-top-item">
                    <Link className="nav-top-link" to="/ankush-sir">only Admin can access</Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminLink;
