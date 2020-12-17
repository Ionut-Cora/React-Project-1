import React from 'react';
import './PostItem.css';

function PostItem(props) {
    const { title, body } = props;
    return(
        <div id="post-item">
            <h3>{ title }</h3>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;