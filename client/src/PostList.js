import React from 'react';
import style from './style';
import Comment from './Comment';

export default function PostList(props) {  
        console.log(props.state.data)
        let post = props.state.data.map(_post => {
            return (<div>
                        <p>{_post}</p>
                    
                    
                    {/*<button className="vote">{emoji.get('thumbsup')}</button>*/}
                    <button className="reply">Reply</button>
                    <button className="delete">Delete</button>
                    </div>
            )
        })
        return (
            <div style={ style.PostList }>
                {post}
            </div>
        )
    }


