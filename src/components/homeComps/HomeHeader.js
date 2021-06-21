import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { WiStars } from 'react-icons/wi'
import { connect, useSelector } from 'react-redux'
import { addDp } from '../../actions/AuthAction'
import './header.css'
import Progress from './Progress'
// import { addDp } from '../actions/AuthAction';


const mapDispatchToprops = (dispatch) => {
    return{
        addDp: x => dispatch(addDp(x))
    }

}
 
function HomeHeader({addDp}) {

    const state = useSelector(state => state.firebase.profile)
    console.log(state)

    
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState('')
    const [ image, setImage ] = useState('')


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

    const submitHandler = (e) => {
        e.preventDefault()

        if (image && state.initials && state.userName ){
            const value = {
                userName: state.userName,
                initials: state.initials,
                image: image
            }
            addDp(value)
        }
    }


    const urlHandler = (url) => {
        if(url !== undefined){
            setImage(url)
        }
    }


    return (
        <div>
            
            <div Id = 'home-header'>
                <div className = "header-text">
                    Home
                </div>
                    <div className = "prog">{file && <Progress file={file} setFile = {setFile} handler = {urlHandler}/>}</div>
                <div className = 'header-icon'>
                    <form onSubmit = {submitHandler}>


                        <div className = "form-content">
                            <input type = 'file' className = "header-file"  onChange = {changeHandler}/>
                            <img src = "/file-upload.svg" className ="head-file-icon" alt = "add file"/>
                        </div>
                            
                        
                        <button id = "head-btn" type = "submit">add dp</button>
                    
                    </form>
                    {/* <WiStars/> */}
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToprops)(HomeHeader)

