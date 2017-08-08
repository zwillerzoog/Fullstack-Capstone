import React from 'react';
import style from './style';

export default function PostForm(props) {

function onSubmit() {
    console.log(props);
}

// function addPost() {
//   $('.post-form').submit(e => {
//       e.preventDefault();
//       const url = '/post';
//       const postInput = $('.post-input').val();
//       $.ajax({
//           url,
//           method: 'POST',
//           text: postInput
//       }).done(post => {
//           state.text = post;
//       })
//   })
// }

onSubmit();

    return (
            <div className="post-page">
                <form className="post-form">
                    <input type="text" className="post-input" placeholder="Kris asked a really great question today!" />
                    <button type="submit">Add Comment</button>
                </form>
            </div>)
}


// class CommentList extends Component {
//   render() {
//     let commentNodes = this.props.data.map(comment => {
//       return (
//         <Comment
//           author={ comment.author }
//           uniqueID={ comment['_id'] }
//           onCommentDelete={ this.props.onCommentDelete }
//           onCommentUpdate={ this.props.onCommentUpdate }
//           key={ comment['_id'] }>
//           { comment.text }
//         </Comment>
//       )
//     })
//     return (
//       <div style={ style.commentList }>
//         { commentNodes }
//       </div>
//     )
//   }
// }
// export default CommentList;

