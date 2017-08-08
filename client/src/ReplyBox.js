import React from 'react';
import PostReply from './PostReply';
import style from './style';

export default function ReplyBox() {

//This is the onClick handler for when we hide/show replies. if ? else :
//onClick={this. ?: }

    return ( <div className="reply-box" hidden>
        <PostReply />
        <form className="reply-input">
            <input type="text" placeholder="I agree!" />
            <button type="submit">Reply</button>
            <button type="reset">Cancel</button>
            <button type="button">Hide Replies</button>
        </form>
        </div>
    )
}