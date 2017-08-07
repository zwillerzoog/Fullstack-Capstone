import React, { Component } from 'react';
import './App.css';
import PostPage from './PostPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to React</h1>
        </div>
        <PostPage />
      </div>
    );
  }
}

export default App;
