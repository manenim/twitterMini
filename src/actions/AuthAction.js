export const logIn = (creds) => {
    return (dispatch, getState, { getFirebase } ) => {
        const firebase = getFirebase()
        
        firebase.auth().
        signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => dispatch({
            type: 'SIGN_SUCCESS' 

        })).catch(err => {
            dispatch({
                type: 'SIGN_ERROR', 
                err
            })
        })
    }
}

export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().
        signOut().then(() => 
        dispatch({
            type: 'SIGN_OUT'
        })).catch(err => dispatch({
            type: 'SIGN_OUT_ERR',
            err
        }))
    }
}

export const signIn = (newUser) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res) => {
            firestore.collection('users').doc(res.user.uid).set({
                userName: newUser.name,
                initials: newUser.name[0]
            })
        }).then(() => {
            dispatch({
                type: 'NEW_USER'
            })
        }).catch((err) => {
            dispatch({
                type: 'NEW_USER_ERR',
                err
            })
        })
    }
}

export const addDp = (pic) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        const authorId = getState().firebase.auth.uid

        console.log(authorId)

        firestore.collection('users').doc(authorId).set({
            userName: pic.userName,
            initials: pic.initials,
            image: pic.image
        })
        .then(() => dispatch({type: 'DP_SUCCESS'}))
        .catch((err) => dispatch({type: 'DP_ERR', err}))
    }
}