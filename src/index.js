import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';
import firebase from './firebase/fbConfig'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'
import { Provider, useSelector } from 'react-redux';
import { AiOutlineTwitter } from 'react-icons/ai'


const store = createStore(rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase}))
)

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const rrfProps = {
  firebase, 
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const AuthisLoaded = ({children}) => {
  const auth = useSelector(state => state.firebase.auth);

  return (!isLoaded(auth)) ? <div className = "loader"><img src = "twitter.svg" alt = "logo"/></div> : children
 }

// const PostisLoaded = ({children}) => {
//   const posts = useSelector(state => state.firestore.ordered);

//   return (!posts.includes(posts)) ? <h2>Loading....</h2> : children
//  }


ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>

        <AuthisLoaded>
            <App />
        </AuthisLoaded>
      </ReactReduxFirebaseProvider>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



///Profile left