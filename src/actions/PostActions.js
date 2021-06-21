import { timeStamp } from "../firebase/fbConfig"

export const addPost = (post) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()
        const authorId = getState().firebase.auth.uid
        const createdAt = timeStamp();

        console.log(post)
        firestore.collection('posts').add({
            
            ...post,
            authorId: authorId,
            date: new Date(),
            createdAt: createdAt
        }).then(() => dispatch({type: 'ADDED'}))
        .catch(err => dispatch({type: 'ADD_ERR', err}))
    }
}