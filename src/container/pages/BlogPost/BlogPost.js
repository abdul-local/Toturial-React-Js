import React, { Component ,Fragment} from 'react'
import Axios from 'axios'
import './BlogPost.css'
import Post from '../../../components/Post/Post'


export default class BlogPost extends Component {
    constructor(props){
        super(props)

        this.state={
            data:[]
        }
    }


    componentDidMount (){

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            
            
            this.setState({

                data:res.data
            })

            console.log('data hasil mounting:',this.state.data)
        }).catch(err=>{
            console.log(err);
        })
    
    
    
    
    }
    handlerRemove(){

    }

    render() {
        
        
        return (

            <Fragment>
                <p>Blog Post</p>
                {
                this.state.data.map(post=> 
                <Post 
                key={post.id}
                title={post.title}
                desc={post.body}
                deletehandale={this.handlerRemove }       
                />
                )
                }
               
                 
            
            </Fragment>
        
 

               
            );
    
    }
}
