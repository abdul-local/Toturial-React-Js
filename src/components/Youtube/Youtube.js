import React from 'react'
import './Youtube.css'

export default function Youtube({image,title,desc}) {
    return (
        <div className="youtube-wrapper">
         <img  className="img-thumb" src={image} />   

         <p className="title">{title}</p>
         <p className="desc"> {desc}</p>
            
        </div>
    )
}
