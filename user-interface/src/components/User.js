import React from 'react'
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <NavLink to="/api/user/:id">
            <div className="user-card">
                <h2>{props.name}<br /></h2>
                <div className="bio">Bio: {props.bio}</div>
            </div>
        </NavLink>
    )
}

export default User;
