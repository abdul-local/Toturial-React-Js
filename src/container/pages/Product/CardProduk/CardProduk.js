import React, { Component } from 'react'
import './CardProduk.css';

export default class CardProduk extends Component {

    state={
    
        order:3
    }

    HandlerChange=(newVelue)=>{

        this.props.onHandlerCounterChange(newVelue);
        
    }


    onhandlerPlus=()=>{
        
        this.setState({
            order:this.state.order+1
        });

        this.HandlerChange(this.state.order)



    }
    
     onhandlerMinus=()=>{

         if (this.state.order >0){

            this.setState({

                order:this.state.order - 1
            })

            this.props.onHandlerMinusChange(this.state.order)

         }
     
     }

    render() {
        return (

           <div className='card'>
            <div className='img-thumb-prod' >
                <img src='https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
            </div>
            <div className='product-title'>Sate Daging Sapi</div>
            <div className='product-price'>Rp35.000,00</div>
            <div className='counter'>
                <button className='minus' onClick={this.onhandlerMinus}>-</button>
                <input type='text' value={this.state.order}></input>
                <button className='plus' onClick={this.onhandlerPlus}>+</button>
            </div>

        </div>


        )
    }
}
