

const PostReducer = (staate = {}, action) => {
    switch(action){
        case 'ADDED': {
            console.log('post added');
            return state;
        }

        case 'ADD_ERR': {
            console.log('sorry, there was an error')
            return state
        }

        default: return state
    }
}