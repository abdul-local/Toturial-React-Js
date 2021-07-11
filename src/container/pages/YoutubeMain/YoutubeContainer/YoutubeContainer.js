import React, { Component } from 'react'
import './YoutubeContainer.css'

export default class YoutubeContainer extends Component {
    render() {
        return (
         <div className="youtube-wrapper">
          <div className="img-thumb">
           <img src={this.props.image} />   
          </div>   
         <p className="title">{this.props.title}</p>
         <p className="desc"> {this.props.desc}</p>
         
         </div>

        );
    }
}
