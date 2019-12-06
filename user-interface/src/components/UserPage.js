import React, { useEffect } from 'react'
import { getUser } from '../actions/userActions';
import { connect } from 'react-redux';

const UserPage = (props) => {
    useEffect(() => {
        props.getUser(props.user)
    }, [])

    return (
        <div>
            {props.user}
        </div>
    )
}

const mapStateToProps = ({ userReducer }) => ({
    user: userReducer.user
})

export default connect(mapStateToProps, { getUser})(UserPage);
