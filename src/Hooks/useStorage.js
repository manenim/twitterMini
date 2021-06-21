import React, { useEffect, useState } from 'react'
import { projectFirestore, projectStorage, timeStamp } from '../firebase/fbConfig'

const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100

            setProgress(percentage)
            console.log('completer')
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({
                url: url,
                createdAt: createdAt
            })
            setUrl(url)
        })

    }, [file])
    return {progress, url, error}
}

export default useStorage
