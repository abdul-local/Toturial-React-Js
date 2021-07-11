import React, { Component, Fragment } from 'react'
import CardProductContex from './CardProductContex/CardProductContex';
import './ProductStateContex.css';
import {rootContex} from '../../Home/Home'

export default class  extends Component {



    render() {
       
        return (
            <Fragment>
               <rootContex.Consumer>
                   {
                       value=>{

                        console.log('value:',value);
                           return (

                            <div>

                            <div className='space'>
                            </div>  
                             <div className='header'>
                                 <div className='logo'>
                                     <img src='https://thumbs.dreamstime.com/b/shopping-trolley-icon-simple-vector-illustration-black-white-background-121287108.jpg'  width={40} height={40}/>
                                 </div>
                                 <div className='troley'>
                                     <img src='https://images.unsplash.com/photo-1575529673278-45f8a3907e99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' />
                                     <div className='count'>{value.state.order}</div>
                                 </div>
                             </div>

                             </div>

                           );
                       }
                   }
            
           
            </rootContex.Consumer>
          <CardProductContex
         
          />
          
          
            </Fragment>
          
        )
    }
}
