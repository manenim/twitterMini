import React, { useEffect } from 'react'
import useStorage from '../../Hooks/useStorage'

const Progress = ({file, setFile, handler}) => {

    const {url, progress} = useStorage(file)
    console.log(file)
    console.log(progress, url)

    useEffect(() => {
        if(url){
            setFile(null)
            checker(url)
            console.log(url)
        }
    }, [url, setFile])

    const checker = (url) => {
        handler(url)
    }

    return (
        <div className = "progress-bar" style = {{width: progress + '%' }}>
            <span>{progress}</span>
        </div>
    )
}

export default Progress