import React from 'react';
import UserItem from './UserItem';
import logo from '../logo.png';
import './UserList.css';

function UserList(props) {
    const { users } = props;

    return (
        <div id="userList">
            <h2>Users list:</h2>
            <div id="user-item">
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        salary={ user.salary }
                        image={ logo }
                        isGoldClient={ user.isGoldClient }
                        key={ index }
                        onDelete={props.handleDelete}
                    />
                })}
            </div>
            
        </div>
    );
}

export default UserList;