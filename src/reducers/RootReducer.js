import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
    auth: AuthReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,

})

export default rootReducer