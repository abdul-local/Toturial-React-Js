import React, { Component, Fragment } from 'react'
import CardProduk from '../../pages/Product/CardProduk/CardProduk';
import './Product.css'


export default class  extends Component {

    state={
        order:3
    }

    onCounterChange=(newOrder)=>{
        this.setState({
            order:newOrder+1
        });
    }
    onMinuesChange=(newOrder)=>{
        this.setState({
            order:newOrder - 1
        })
    }


    render() {
       
        return (
            <Fragment>
                {/* <CardProduk /> */}

            
            <div className='space'>
            </div>  
             <div className='header'>
                 <div className='logo'>
                     <img src='https://thumbs.dreamstime.com/b/shopping-trolley-icon-simple-vector-illustration-black-white-background-121287108.jpg'  width={40} height={40}/>
                 </div>
                 <div className='troley'>
                     <img src='https://images.unsplash.com/photo-1575529673278-45f8a3907e99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' />
                     <div className='count'>{this.state.order}</div>
                 </div>
             </div>

          <CardProduk  
          onHandlerCounterChange={(value)=>this.onCounterChange(value)} 
          onHandlerMinusChange={(value)=>this.onMinuesChange(value)}
          
          />
          
            </Fragment>
          
        )
    }
}
