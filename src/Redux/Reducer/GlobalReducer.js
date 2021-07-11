
const globalState={

    order:3
  }
 

  // reducer
  const rootReducer=(state=globalState,action)=>{
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          ...state,
          order:state.order+1
        }
       
      case 'MINUS_ORDER':
       
             return {
          ...state,
          order:state.order-1
          
             }
        
      default:
        return state;
    
    }
  
  
  }
  
  export default rootReducer;


