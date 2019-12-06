import React, { useEffect } from 'react'
import { getAll } from '../actions/userActions';
import { connect } from 'react-redux';
import User from './User';

const UserList = (props) => {
    useEffect(() => {
        props.getAll(props.users)
      }, [])

    return (
        <div>
        {props.users &&
            props.users.map(user =>{
                return(
                    <User
                        key={user.id}
                        name={user.name} 
                        bio={user.bio}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = ({ userReducer }) => ({
    users: userReducer.users
  })

export default connect(mapStateToProps, { getAll })(UserList);
