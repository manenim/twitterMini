import React, { useEffect, useState } from 'react'
import './input.css'
import TextareaAutosize from 'react-textarea-autosize';
import { BsCardImage } from 'react-icons/bs'
import Progress from './Progress';
import { addPost } from '../../actions/PostActions';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import useStorage from '../../Hooks/useStorage';

const mapDispatchToProps = (dispatch) => {
 return{
     addPost: x => dispatch(addPost(x))
 }
}


const HomeInputForm = ({addPost, userName, image}) => {

    console.log(image)

    if(userName !== undefined){
        console.log(userName)
    }

    // function textAreaAdjust(element) {
    //     console.log(element)
    //     // element.style.height = "1px";
    //     // element.style.height = (25+element.scrollHeight)+"px";
    //   }

    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState('')
    const [ input, setInput ] = useState('')

    const [ imag, setImag ] = useState('')

    const types = ['image/png', 'image/jpeg']
    const changeHandler = (e) => {
        console.log('changed')
        let selected = e.target.files[0];

        console.log(selected)
        if(selected && types.includes(selected.type)){
            setFile(selected) 
            setError('')
            
        }else{
            setFile(null);
            setError('please select an image file(png or jpeg')
        }
    }

    const textHandler = (e) => {
        setInput(e.target.value)
    }

    const urlHandler = (url) => {
        if(url !== undefined){
            setImag(url)
        }
    }


    const submitHandler = (e) => {
        
        e.preventDefault()
        if(userName !== undefined){
            const value = {
                caption: input,
                userName: userName,
                url: imag,
                dp: image,
            }
            
            
            addPost(value)
            console.log(value)
        
        }
        setInput('')
        setImag('')

        
    }

    return (
        <form className = "post-form" onSubmit = {submitHandler}>
            <div className = "body-form">
                <div id = 'profile-pic1'>
                    {image !== undefined && <img src = {image} alt = 'pic'/>}
                </div>
                <div className = "main-form">
                    <div id = 'type-post'>
                        <textarea className = "post-input" placeholder = "What's Happening?" value = {input} onChange = {textHandler}></textarea>
                    
                    </div>
            
                    <div className = 'output prog'>
                            {error && <div className = 'error'>{error}</div>}
                            {file && <div>{file.name}</div>}
                            {file && <Progress file={file} setFile = {setFile} handler = {urlHandler}/>}
                        </div>
                    <div className = 'post-footer'>
                        <label>
                            <input id = "input-file" type = 'file'  onChange = {changeHandler}/>
                            <img src = "/file-image.svg" className ="img-icn" alt = "add file"/>
                        </label>
                        
                        {/* <button className = "img-icn"><BsCardImage/></button> */}
                        <button type = 'submit' className = "tweet">Tweet</button>
                    </div>
                </div>

            </div>
            
        </form>
    )
}

// export default connect(null,)()

export default compose(connect(null, mapDispatchToProps),
        firestoreConnect(ownProps => [
            {
            collection: "users"
            }
        ])
    )(HomeInputForm) 

