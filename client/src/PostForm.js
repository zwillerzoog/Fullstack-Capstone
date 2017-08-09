import React from 'react';
import style from './style';
import * as actions from './actions';
import {connect} from 'react-redux';

export class PostForm extends React.Component{

    onSubmit(event){
        event.preventDefault();
        const value = this.input.value;
        console.log('-----> ', value);
        this.props.dispatch(actions.addPost({value}));
    }

    render(){
        return(
            <div className='addOption'>
                Have anonymous feedback to share?
                <form onSubmit={e => this.onSubmit(e)}>
                    <input type="text" placeholder="enter text here" 
                        ref={input => this.input = input} required/>
                    <button type="submit">Tell us!</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    text: state.addPost
});

export default connect(mapStateToProps)(PostForm);