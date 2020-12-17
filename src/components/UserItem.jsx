import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {name, email, isGoldClient, salary, image} = props;

    

    return (
        <div id="user">
            <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
                <p>{ salary }</p>
                { isGoldClient
                    ? <h3>GOLD Client</h3>
                    : null
                }
            </div>

            <button onClick={() => props.onDelete(props.id)}>Delete user</button>
            
            <div id="img">
                <img src={ image } alt="imagine"/>
            </div>
            
        </div>
    );
}

export default UserItem;