import React from 'react'
import Post from './Post'
import PostInput from './PostInput'

function Feed() {
    return (
        <>
        <div>
        <PostInput/> 
        <Post name="William" description="This really works and I am so happy about it!" message="Yeah this really works, super socials for the win!"/> 
        </div>
        
            
        </>
    )
}

export default Feed
