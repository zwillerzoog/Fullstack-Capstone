import React from 'react';
import DATA from './data';
import style from './style';
import PostList from './PostList';
import PostForm from './PostForm';
import * as actions from './actions';
import reducer from './reducers';
const emoji = require('node-emoji');


class PostPage extends React.Component {
  addPost(text) {
    this.props.dispatch(actions.addPost(text));
  }

  render() {
    return (
      <div className="post-page">
        <PostForm />
        <div style={style.PostPage}>
          <PostList state={this.state} />
        </div>
      </div>
    );
  }
}

export default PostPage;
