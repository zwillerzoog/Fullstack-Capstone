import React from 'react';
import style from './style';
import Comment from './Comment';
import ReplyBox from './ReplyBox';
import reducer from './reducers';
import {connect} from 'react-redux';
const emoji = require('node-emoji');

export class PostList extends React.Component {

 posts() { 
  let post = this.props.text.map(_post => {
    return (
      <div>
        <p>
          {_post}
        </p>
        <button className="vote">
          {emoji.get('thumbsup')}
        </button>
        <button className="reply">Show Replies</button>
        <button className="delete">Delete</button>
        <ReplyBox />
      </div>
    );
  });
 }

 render() {
  return (
    <div style={style.PostList}>
      {/* {post} */}
    </div>
  );
}
}

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(PostList);