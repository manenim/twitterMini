import moment from 'moment'
import React from 'react'
import { BsCollection } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import RightMenu from '../components/homeComps/RightMenu'
import LeftMenu from '../components/homeComps/LeftMenu'
import './postfill.css'
import Loader from "react-loader-spinner";

const PostFill = (props) => {

    console.log(props)
    const back = props.history.goBack
    const {post} = props
    const id = props.match.params.id
    console.log(post)
    if(post){
        return(
        // <div class = "fill-wrapper">
        //     <div class ="fill-header">
        //         <span onClick = {back}>Back</span>post details
        //     </div>
        //     <div className = 'fill-content'>
        //         <div className = 'fill-profile'>
        //             <div className = 'fill-profile-pic'>
        //                 {post.dp ? <img src = {post.dp} alt = 'pic'  /> : post.userName[0]}
                        
        //             </div>
        //             <div className = 'fill-author'>{post.userName} <br/> <span>{moment(post.date.toDate()).calendar()}</span></div>
        //         </div>
        //         <div className = 'fill-text'>
                    
        //             <p class= "fill-p">{post.caption}</p>

        //             {post.url !== '' && <div className = "fill-post-img">
        //                 <img src = {post.url} alt = "pics"/>
        //             </div>}
        //             {/* <div className = 'like'><FcLike className = 'likee'/></div> */}
        //         </div>
        // </div>


        // </div>

            
        <div id =  "home">
                <div className = "first">
                    <LeftMenu/>
                </div>

               
                <div className = 'middle'>
                    {/* <HomeHeader/>

                    <HomeInputForm userName = {userName} image = {image}/>
                    
                    {posts !== undefined ? posts.map(post => <Link style={{ textDecoration: 'none' }} to ={'/post/' + post.id }><Posts dp = {post.dp} caption = {post.caption} author = {post.userName} image = {post.url}/></Link>) : null } */}

 <div class = "fill-wrapper">
             <div class ="fill-header">
                 <span onClick = {back}>Back</span>post details
             </div>
             <div className = 'fill-content'>
             <div className = 'fill-profile'>
                 <div className = 'fill-profile-pic'>
                         {post.dp ? <img src = {post.dp} alt = 'pic'  /> : post.userName[0]}
                        
                     </div>
                     <div className = 'fill-author'>{post.userName} <br/> <span>{moment(post.date.toDate()).calendar()}</span></div>
                 </div>
                 <div className = 'fill-text'>
                    
                     <p class= "fill-p">{post.caption}</p>

                     {post.url !== '' && <div className = "fill-post-img">
                         <img src = {post.url} alt = "pics"/>
                     </div>}

                    
                     {/* <div className = 'like'><FcLike className = 'likee'/></div> */}
                     <span className = "date"> posted {moment(post.date.toDate()).calendar()}</span>
                 </div>
         </div>


         </div>

        <div className = "fill-metrics">
            <p>
            <span>0</span> Retweets
            </p>
            <p>
            <span> 0 </span> Quote Tweets
            </p>
            <p>
            <span> 0 </span> Likes
            </p>
        </div>
                </div>

            
                <div className = "last">
                    <RightMenu/>
                </div>
                
           
  </div>
        
        )
    }else{
    return (
        <div className = "loader">
                <img src = "twitter.svg" alt = "logo"/>
        </div>
    )}
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null
    console.log(post)
    return{
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        
        {collection: 'posts'}

    ])
)(PostFill)
