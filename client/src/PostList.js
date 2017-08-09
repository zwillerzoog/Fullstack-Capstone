import React from 'react';
import style from './style';
import Comment from './Comment';
import ReplyBox from './ReplyBox';
import reducer from './reducers';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import * as actions from './actions';
const emoji = require('node-emoji');

export class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getPosts());
  }
 render() {
   let post = this.props.text.map((t, index) => {
    return (
      <div key={index}>
        <p>{t.value}</p>
        <button className="vote">
          {emoji.get('thumbsup')}
        </button>
        <button className="reply">Show Replies</button>
        <button className="delete">Delete</button>
        <ReplyBox />
      </div>
    )
  });
  return (
    <div style={style.PostList}>
       {post} 
    </div>
  );
 }
}

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(PostList);