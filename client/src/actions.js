// | GET_POSTS   | Retrieves all entries in the databases             |
// | SELECT_POST | Selects a single POST by its id from the database  |
// | ADD_POST    | Adds an POST to the database                       |
// | REMOVE_POST | Removes a single POST in the database using its id |
// | ADD_REPLY   | Adds a single reply to the database                |
// | REMOVE_REPLY| Removes a single reply to the database             |
// | ADD_REPLY   | Adds a single reply to the database                |

export const GET_POSTS = 'GET_POSTS';
export const getPosts = text => ({
    type: GET_POSTS,
    text
})

export const ADD_POST = 'ADD_POST';
export const addPost = text => ({
    type: ADD_POST,
    text
})

