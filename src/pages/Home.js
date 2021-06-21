import React from 'react'
import { connect, useSelector } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { logOut } from '../actions/AuthAction'
import HomeHeader from '../components/homeComps/HomeHeader'
import HomeInputForm from '../components/homeComps/HomeInputForm'
import Posts from '../components/homeComps/Posts'
import RightMenu from '../components/homeComps/RightMenu'
import LeftMenu from '../components/homeComps/LeftMenu'
import useStorage from '../Hooks/useStorage'
import './home.css'

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: (x) => dispatch(logOut(x))
    }
}

const mapStateToProps = (state) => {
    const posts = state.firestore.ordered.posts
    

        return {
            posts: posts,
        }
    
    
}


const Home = (props) => {
    const {logOut, posts} = props
    console.log(props)

    if(posts == !undefined){

    }

    const profile = useSelector(state => state.firebase.profile)

    const { userName, initials, image} = profile
    console.log(userName)

    const uid = useSelector(state => state.firebase.auth.uid)
    return (!uid) ? <Redirect to ='/login'/> : 
    (
        <div id =  "home">
                <div className = "first">
                    <LeftMenu/>
                    <button class = "sign-out" onClick = {logOut}>Log Out</button>
                </div>

               
                <div className = 'middle'>
                    <HomeHeader/>

                    <HomeInputForm userName = {userName} image = {image}/>
                    
                    {posts !== undefined ? posts.map(post => <Link style={{ textDecoration: 'none' }} to ={'/post/' + post.id }><Posts dp = {post.dp} caption = {post.caption} author = {post.userName} image = {post.url}/></Link>) : null }
                </div>

            
                <div className = "last">
                    <RightMenu/>
                </div>
                
           
        </div>
    )
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
        firestoreConnect(ownProps => [
            {
            collection: "posts",
            orderBy: ['date', 'desc']
            }
        ])
    )(Home) 

