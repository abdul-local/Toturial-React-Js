
// import React from 'react'

import {connect} from 'react-redux'

import './CardProduk.css'

import React, { Component } from 'react'


class CardProduk extends Component {
  
    render() {
        console.log(this.props)
        return (
             
        <div>
        <div className='card'>
        <div className='img-thumb-prod' >
            <img src='https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
        </div>
        <div className='product-title'>Sate Daging Sapi</div>
        <div className='product-price'>Rp35.000,00</div>
        <div className='counter'>
            <button className='minus' onClick={this.props.handleMinus} >-</button>
            <input type='text' value={this.props.order}></input>
            <button className='plus' onClick={this.props.handlePlus} >+</button>
        </div>

    </div>
        
    </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return {

        order:state.order
        
    }

}
const mapDispatchToProps=(dispatch)=>{
    return {
        handlePlus:()=> dispatch({type:'ADD_ORDER'}),
        handleMinus:()=> dispatch({type:'MINUS_ORDER'})
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardProduk)