import React from 'react';
import style from './style';
import Comment from './Comment';
import ReplyBox from './ReplyBox';
import reducer from './reducers';
const emoji = require('node-emoji');

export default function PostList(props) {

console.log("We're trying to get the state from reducers so we can work with postList!");




  // let post = props.state.text.map(_post => {
  //   return (
  //     <div>
  //       <p>
  //         {_post}
  //       </p>
  //       <button className="vote">
  //         {emoji.get('thumbsup')}
  //       </button>
  //       <button className="reply">Show Replies</button>
  //       <button className="delete">Delete</button>
  //       <ReplyBox />
  //     </div>
  //   );
  // });
  return (
    <div style={style.PostList}>
      {/* {post} */}
    </div>
  );
}
