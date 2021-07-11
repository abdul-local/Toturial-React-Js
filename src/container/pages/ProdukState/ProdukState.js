import React,{Fragment} from 'react'
import CardProduk from './CardProduk/CardProduk'
import {connect} from 'react-redux'

function ProdukState(props) {
    return (
        <Fragment>
    <div className='space'>
    </div>  
     <div className='header'>
         <div className='logo'>
             <img src='https://thumbs.dreamstime.com/b/shopping-trolley-icon-simple-vector-illustration-black-white-background-121287108.jpg'  width={40} height={40}/>
         </div>
         <div className='troley'>
             <img src='https://images.unsplash.com/photo-1575529673278-45f8a3907e99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' />
             <div className='count'>{props.order}</div>
         </div>
     </div>

    <CardProduk  
     />
  
    </Fragment>
    )
}
const mapStateToProps=(state)=>{
    return {
        order:state.order
    }

}

export default connect(mapStateToProps)(ProdukState)
