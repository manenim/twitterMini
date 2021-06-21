import React from 'react'
import { FcLike } from 'react-icons/fc'
import { IconContext } from 'react-icons/lib'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './post.css'

// const mapStateToProps = (state) => {
//     const posts = state.firestore.ordered.posts
//     console.log(posts)

//     return {
//         posts: posts,
//         uid: state.firebase.auth.uid
//     }
// }

const Posts = ({caption, author, image, dp }) => {
    console.log(author)
    
    return (
        <div className = 'postContainer'>
            <div className = 'post-profile'>
                {dp && <img src = {dp} alt = 'pic'  />}
            </div>
            <div className = 'post-text'>
                <div className = 'author'>{author}</div>
                <p>{caption}</p>

                {image !== '' && <div className = "post-img">
                    <img src = {image} alt = "pics"/>
                </div>}
                {/* <div className = 'like'><FcLike className = 'likee'/></div> */}
                <div className ="post-foot">
                    <div className = "comment">
                        <img src = "/comment.svg" alt = "like"/>
                        <span className = "txt">0</span>
                    </div>
                    <div className = "comment">
                        <img src = "/retweet.svg" alt = "like"/>
                        <span className = "txt">0</span>
                    </div>
                    <div className = "comment">
                        <img src = "/heart.svg" alt = "like"/>
                        <span className = "txt">0</span>
                    </div>
                    <div className = "comment">
                        <img src = "/upload.svg" alt = "like"/>
                        <span className = "txt">0</span>
                    </div>
                </div>
                    {/* 
                    <img src = "/retweet.svg" alt = "like"/>
                    <img src = "/heart.svg" alt = "like"/>
                    <img src = "/upload.svg" alt = "like"/> */}
            </div>
        </div>
    )
}
export default Posts
// export default compose(connect(mapStateToProps),
//         firestoreConnect(ownProps => [
//             {
//             collection: "posts",
//             orderBy: ['date', 'desc']
//             }
//         ])
//     )(Posts) 


