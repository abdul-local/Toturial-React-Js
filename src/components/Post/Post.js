import React, { Fragment } from 'react'
import './Post.css'

 const Post=(props)=>{
    
        return (
            <Fragment>

            <div className='post'>
            <div className='img-thumb'>
                <img  src='https://placeimg.com/640/480/tech'/>
            </div>
            <div className='content'>
                <p className='title'>{props.title}</p>
                <p className='desc'>{props.desc}</p>
                <button className='remove' onClick={props.delethandler}>remove</button>
                <button className='update' onClick={props.updatehandler}>update</button>
                
            </div>

        </div>
        </Fragment>
        )
    
}

export default Post;