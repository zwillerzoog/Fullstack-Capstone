

// | GET_POSTS   | Retrieves all entries in the databases             |
// | SELECT_POST | Selects a single POST by its id from the database  |
// | ADD_POST    | Adds an POST to the database                       |
// | REMOVE_POST | Removes a single POST in the database using its id |
// | ADD_REPLY   | Adds a single reply to the database                |
// | REMOVE_REPLY| Removes a single reply to the database             |
// | ADD_REPLY   | Adds a single reply to the database                |

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const getPostsRequest = text => ({
    type: GET_POSTS_REQUEST,
    text
})

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const getPostsSuccess = text => ({
    type: GET_POSTS_SUCCESS,
    text
})

export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const getPostsError = text => ({
    type: GET_POSTS_ERROR,
    text
})

export const ADD_POST = 'ADD_POST';
export const addPost = text => ({
    type: ADD_POST,
    text
})

export const getPosts = () => dispatch => {
    
    dispatch(getPostsRequest());
    fetch(`http://localhost:8080/`)
        .then(res => {
            
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            console.log(res.json());
            return res.json()
        })
        .then((text) => {
            console.log('hey im here')
            dispatch(getPostsSuccess(text))
        })
        .catch((err) => {
            dispatch(getPostsError(err))
        })
}

