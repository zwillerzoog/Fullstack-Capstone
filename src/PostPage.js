import React from 'react';
import DATA from './data';
import style from './style';
import PostList from './PostList';
const emoji = require ('node-emoji');


class PostPage extends React.Component {
    constructor() {
        super();
        this.state = { 
            data: ['Kris asked a great question today!', 'Paul sneezed on me', 'bacon'],
            view: 0 
        };
    }

    render() {
        return (
            <div className="post-page">
                <form className="post-input">
                    <input type="text" placeholder="Kris asked a really great question today!" />
                    <button type="submit">Add Comment</button>
                </form>
                <div style={style.PostPage}>
                    <h2>Posts:</h2>
                        <span className="post">
                            <p>William is always positive</p>
                            <p>Vote Count: 8</p>
                            <button className="vote">{emoji.get('thumbsup')}</button>
                            <button className="reply">Reply</button>
                            <button className="delete">Delete</button>
                        </span>
                    <PostList state={this.state} />
                    {/*<Replies />
                    <Votes />
                    <DeleteButton /> */}
                </div>
            </div>
        )
    }
}

export default PostPage;