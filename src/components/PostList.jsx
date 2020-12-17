import React from 'react';
import PostItem from './PostItem';
import './PostList.css';

class PostList extends React.Component {
    render() {
        const { posts } = this.props;
        return(
            <div id="postList"  style={{display: "none"}}>
                <h2>Posts list:</h2>
                {
                    posts.map((post, index) => {
                        return <PostItem
                            title={post.title}
                            body={post.body}
                            key={index}
                        />
                    })
                }
            </div>
        )
    }
}

export default PostList;