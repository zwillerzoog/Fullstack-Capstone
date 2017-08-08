import * as actions from './actions';

const initialState = {
      text: [],
      view: 0,
      loading: true,
      count: 0
    };

export const reducer = (state=initialState, action) => {
    if (action.type === actions.GET_POSTS) {
        return Object.assign({}, state, {
            text: [[...state.text], action.text]
        })
    } else if (action.type === actions.ADD_POST) {
        return Object.assign({}, state, {
            text: [[...state.text], action.text]
        }) 
    }
    return state;
}

// class Comment extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       toBeUpdated: false,
//       author: '',
//       text: ''
//     };