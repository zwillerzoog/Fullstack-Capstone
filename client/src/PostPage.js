import React from 'react';
import DATA from './data';
import style from './style';
import PostList from './PostList';
import PostForm from './PostForm';
import * as actions from './actions';
import reducer from './reducers';
import {connect} from 'react-redux';
const emoji = require('node-emoji');


class PostPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getPosts());
  }

  render() {
    return (
      <div className="post-page" > 
        <PostForm />
          <div style={style.PostPage}>
          <PostList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
})
export default connect(mapStateToProps)(PostPage);
