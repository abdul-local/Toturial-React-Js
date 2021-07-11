import React, { Component } from 'react'
import './CardProductContex.css';
import { rootContex } from '../../../Home/Home';


export default class CardProductContex extends Component {

  
    render() {
        return (

            <rootContex.Consumer>
                {
                    value=>{

                        console.log(value)
                        return (

                            <div className='card'>
                            <div className='img-thumb-prod' >
                                <img src='https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
                            </div>
                            <div className='product-title'>Sate Daging Sapi</div>
                            <div className='product-price'>Rp35.000,00</div>
                            <div className='counter'>
                                <button className='minus' onClick={()=>value.dispatch({type:'MINUS_ORDER'})}>-</button>
                                <input type='text' value={value.state.order} ></input>
                                <button className='plus' onClick={()=>value.dispatch({type:'PLUS_ORDER'})}>+</button>
                            </div>
                        </div>

                        );
                    }
                }

          
        </rootContex.Consumer>

        );
    }
}
